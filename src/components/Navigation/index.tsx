import navigation from '../../mock-data/navigation'

type NavigationType = {
  text: string
  url: string
}

const Navigation = () => {
  return (
    <div>
      <ul>
        {navigation.map((nav, index) => (
          <NavigationItem key={index} item={nav} />
        ))}
      </ul>
    </div>
  )
}

const NavigationItem = ({ item }: { item: NavigationType }) => {
  return (
    <li>
      <a href={item.url}>{item.text}</a>
    </li>
  )
}

export default Navigation
