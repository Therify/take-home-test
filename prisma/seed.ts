import { Provider } from "../src/modules/care/types/provider";
import { ProviderRepository } from "../src/modules/care/repository/provider";
import { sleep } from "@/shared/utils/sleep";

async function main() {
  const start = Date.now();
  console.info("Seeding database...");
  for (const provider of Array.from({ length: 50 }).map(() =>
    Provider.generateFakeProvider()
  )) {
    await ProviderRepository.insert(provider);
    await sleep(100);
  }
  const end = Date.now();
  console.info(`Seeded database in ${end - start}ms`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => process.exit(0));
