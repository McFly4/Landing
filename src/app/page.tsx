import { client, urlFor } from "@/lib/sanity"

async function getLp() {
  const query = `*[_type == "hero"][0] {
    _id,
    title,
    subtitle,
    cta {
      label,
      url
    },
    image{
      asset->{
        _id,
        url
      }
    }
  }
 `
  return await client.fetch(query)
}

export default async function Page() {
  const lp = await getLp()
  return (
    <div className="bg-custom-gradient min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold text-white">{lp.title}</h1>
      <p className="text-lg text-gray-700 mt-4 text-center w-[80%]">{lp.subtitle}</p>
      <div className="mt-10 mb-10">
        <a href={lp.cta.url}>{lp.cta.label}</a>
      </div>
      <img src={urlFor(lp.image).url()} alt="Hero Image" />
    </div>
  )
}
