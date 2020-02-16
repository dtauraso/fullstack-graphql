import React, {useState} from 'react'
import gql from 'graphql-tag'
import PetBox from '../components/PetBox'
import NewPet from '../components/NewPet'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Loader from '../components/Loader'

const ALL_PETS = gql`
    query AllPets {
      pets {
        id
        name
        type
        img
      }
}
`

export default function Pets () {
  const [modal, setModal] = useState(false)
  const {data, loading, error} = useQuery(ALL_PETS)
  const onSubmit = input => {
    setModal(false)
  }

  let petsList = []
  if(data !== undefined) {
    // console.log(data)
    petsList = data.pets.map(pet => (
      <div className="col-xs-12 col-md-4 col" key={pet.id}>
        <div className="box">
          <PetBox pet={pet} />
        </div>
      </div>
    ))

  }
  // console.log(data)
  // suposed to break if I commend out the loading and error cases
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <p>error!</p>
  }
  if (modal) {
    return (
      <div className="row center-xs">
        <div className="col-xs-8">
          <NewPet onSubmit={onSubmit} onCancel={() => setModal(false)}/>
        </div>
      </div>
    )
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          {petsList}
        </div>
      </section>
    </div>
  )
}
