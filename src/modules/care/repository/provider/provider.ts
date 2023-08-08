import { encode } from "js-base64";
import { prisma } from "@/shared/utils/prisma";
import { Provider } from "../../types/provider";

const PROVIDER_INCLUDE_STATEMENT = {
  include: {
    gender: true,
    providerCredentials: {
      include: {
        state: true,
        acceptedInsurances: true,
      },
    },
    providerEthnicities: {
      include: {
        ethnicity: true,
      },
    },
    providerSpecialties: {
      include: {
        concern: true,
      },
    },
  },
};

function connectOrCreate(data: string) {
  return {
    connectOrCreate: {
      where: {
        id: encode(data),
      },
      create: {
        id: encode(data),
        name: data,
      },
    },
  };
}

export async function insert(
  provider: Provider.Type
): Promise<Provider.WithPersistedProps> {
  const { ethnicity, specialties, credentials, gender, ...rest } = provider;
  const { id, createdAt, updatedAt } = await prisma.provider.create({
    data: {
      ...rest,
      gender: {
        ...connectOrCreate(gender),
      },
      providerSpecialties: {
        create: specialties.map((specialty) => ({
          concern: {
            ...connectOrCreate(specialty),
          },
        })),
      },
      providerEthnicities: {
        create: ethnicity.map((providerEthnicity) => ({
          ethnicity: {
            ...connectOrCreate(providerEthnicity),
          },
        })),
      },
      providerCredentials: {
        create: credentials.map((credential) => ({
          state: {
            ...connectOrCreate(credential.state),
          },
          acceptedInsurances: {
            create: credential.acceptedInsurances.map((insurance) => ({
              insurance: {
                ...connectOrCreate(insurance),
              },
            })),
          },
        })),
      },
    },
  });
  return {
    id,
    createdAt,
    updatedAt,
    ...provider,
  };
}

export async function findMany() {
  const providers = await prisma.provider.findMany({
    ...PROVIDER_INCLUDE_STATEMENT,
  });
  return providers.map(({ createdAt, updatedAt, ...provider }) => provider);
}
