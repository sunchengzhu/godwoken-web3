import { env } from "process";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const envConfig = {
  databaseUrl: getRequired("DATABASE_URL"),
  ethAccountLockHash: getRequired("ETH_ACCOUNT_LOCK_HASH"),
  rollupTypeHash: getRequired("ROLLUP_TYPE_HASH"),
  godwokenJsonRpc: getRequired("GODWOKEN_JSON_RPC"),
  creatorAccountId: getRequired("CREATOR_ACCOUNT_ID"),
  chainId: getRequired("CHAIN_ID"),
  defaultFromId: getRequired("DEFAULT_FROM_ID"),
  l2SudtValidatorScriptTypeHash: getRequired(
    "L2_SUDT_VALIDATOR_SCRIPT_TYPE_HASH"
  ),
  ethAddressRegistryAccountId: getRequired("ETH_ADDRESS_REGISTRY_ACCOUNT_ID"),
  polyjuiceValidatorTypeHash: getOptional("POLYJUICE_VALIDATOR_TYPE_HASH"),
  rollupConfigHash: getOptional("ROLLUP_CONFIG_HASH"),
  newRelicLicenseKey: getOptional("NEW_RELIC_LICENSE_KEY"),
  clusterCount: getOptional("CLUSTER_COUNT"),
  redisUrl: getOptional("REDIS_URL"),
  pgPoolMax: getOptional("PG_POOL_MAX"),
  gasPriceCacheSeconds: getOptional("GAS_PRICE_CACHE_SECONDS"),
  extraEstimateGas: getOptional("EXTRA_ESTIMATE_GAS"),
  sentryDns: getOptional("SENTRY_DNS"),
  sentryEnvironment: getOptional("SENTRY_ENVIRONMENT"),
  godwokenReadonlyJsonRpc: getOptional("GODWOKEN_READONLY_JSON_RPC"),
  enableCacheEthCall: getOptional("ENABLE_CACHE_ETH_CALL"),
  logLevel: getOptional("LOG_LEVEL"),
  logFormat: getOptional("LOG_FORMAT"),
};

function getRequired(name: string): string {
  const value = env[name];
  if (value == null) {
    throw new Error(`no env ${name} provided`);
  }

  return value;
}

function getOptional(name: string): string | undefined {
  return env[name];
}
