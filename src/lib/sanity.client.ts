import "server-only"
import { createClient, type ClientConfig, type QueryParams } from "@sanity/client"
import { projectId, dataset, apiVersion } from "@/lib/sanity.api"

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
}

const client = createClient(config)

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string
  qParams?: any
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    // disable cache in development mode.
    cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache",
    next: { tags },
  })
}
