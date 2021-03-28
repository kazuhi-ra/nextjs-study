import { NextPage } from 'next'

type Props = { title: string }

const HomePage: NextPage<Props> = ({ title }) => {

  return (
    <div>
      <div>Welcome to Next.js! by TS</div>
      <img src='./images/kazuhira.jpeg' alt='kazuhi-raのアイコン' width='200' />
    </div>
  )
}

export default HomePage

HomePage.getInitialProps = async () => {
  return { title: 'Top' }
}
