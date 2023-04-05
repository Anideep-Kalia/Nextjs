import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router=useRouter();
    const {slug} = router.query;         {/*this is the main code which is extracting data from the URL and presenting the data*/}
  return (
    <div>
      {slug}
    </div>
  )
}

export default slug
