import Link from "next/link"
import { client, urlFor } from "@/lib/sanity"

async function getHeader() {
  const query = `*[_type == "header"][0] {
  logo {
    asset->{
      _id,
      url
    }
  },
  navigation[] {
    title,
    url
  },
  memberAccess {
    label,
    url,
    notificationCount
  }
}
`
  return await client.fetch(query)
}

export default async function Header() {
  const data = await getHeader()

  return (
    <nav className="fixed flex items-center w-4/5 m-auto">
      <Link href="/">
        <img src={urlFor(data.logo).url()} alt="Company Logo" />
      </Link>
      <ul className="flex">
        {data?.navigation.map((navItem) => (
          <li key={navItem.title} className="mx-4">
            {navItem.title}
          </li>
        ))}
      </ul>
      <div>{data.memberAccess.label}</div>
    </nav>
  )
}
