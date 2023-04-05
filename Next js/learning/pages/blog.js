import React from 'react'
import Link from 'next/link'

const blog = () => {
  return (
    <>
      <div className='dum' style={{width : '18rem'}}>          {/* used a css file which is made global in dummy component*/}
  <div className="card-body">
    <h5 className="card-title">Java Script tutorial</h5>
    <h6 className="card-subtitle mb-2 text-muted">Basics to Advanced</h6>
    <p className="card-text">After readign this post you will be able to understand javasrcipt deeply and will be able to make projects on javascript </p>
    <Link href="/blogpost/javascript" className="card-link" style={{textDecoration:'none' , color:'red'}}>Another link</Link>
  </div>
    </div>
    </>
  )
}

export default blog
