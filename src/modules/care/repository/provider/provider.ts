import { encode } from "js-base64";
import { type Prisma, Provider as PrismaProvider } from "@prisma/client";
import { prisma } from "@/shared/utils/prisma";
import { Provider } from "../../types/provider";

type ProviderWithRelations = Prisma.ProviderGetPayload<{
  include: {
    gender: true;
    providerCredentials: {
      include: {
        state: true;
        acceptedInsurances: {
          include: {
            insurance: true;
          };
        };
      };
    };
    providerEthnicities: {
      include: {
        ethnicity: true;
      };
    };
    providerSpecialties: {
      include: {
        concern: true;
      };
    };
  };
}> &
  PrismaProvider;

const PROVIDER_INCLUDE_STATEMENT = {
  include: {
    gender: true,
    providerCredentials: {
      include: {
        state: true,
        acceptedInsurances: {
          include: {
            insurance: true,
          },
        },
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

export function fromPersistenceToModel({
  providerCredentials,
  providerEthnicities,
  providerSpecialties,
  gender,
  ...provider
}: ProviderWithRelations): Provider.Type {
  return Provider.withPersistedPropsSchema.parse({
    ...provider,
    gender: gender.name,
    ethnicity: providerEthnicities.map((pe) => pe.ethnicity.name),
    specialties: providerSpecialties.map((ps) => ps.concern.name),
    credentials: providerCredentials.map((pc) => ({
      state: pc.state.name,
      acceptedInsurances: pc.acceptedInsurances.map((ai) => ai.insurance.name),
    })),
  });
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
  const providers = await prisma.provider.findMany(PROVIDER_INCLUDE_STATEMENT);
  return providers.map(fromPersistenceToModel);
}
