import navigation from '../../mock-data/navigation'

type NavigationType = {
  text: string
  url: string
}

const Navigation = () => {
  return (
    <ul className="flex gap-x-[3.75rem]">
      {navigation.map((nav, index) => (
        <NavigationItem key={index} item={nav} />
      ))}
    </ul>
  )
}

const NavigationItem = ({ item }: { item: NavigationType }) => {
  return (
    <li>
      <a
        href={item.url}
        className="uppercase text-sm font-bold hover:text-primary transition-[color] duration-300"
      >
        {item.text}
      </a>
    </li>
  )
}

export default Navigation
