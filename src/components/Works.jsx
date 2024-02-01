import React from 'react'
import code from '../assets/code2.png'
import { Card, Button } from 'react-bootstrap';



const Work = () => {
  return (
    <div name="work" className='w-full vh-100  text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        {/* adding code */}

        {/* {container} */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* { Grid Item }  */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16]  rounded-md  mx-auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={code} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16]  rounded-md  mx-auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={code} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16]  rounded-md  mx-auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={code} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16]  rounded-md  mx-auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={code} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16]  rounded-md  mx-auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={code} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16]  rounded-md  mx-auto'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={code} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>






      </div>


    </div>

  )
}

export default Work;