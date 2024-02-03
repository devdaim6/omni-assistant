import Recipehome from '@/components/Recipe/Recipehome'
import { BgSparkles } from '@/components/ui/BgSparkles'
import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return <>
    <BgSparkles className='min-h-screen '>
      <Recipehome />
    </BgSparkles>
  </>
}

export default page