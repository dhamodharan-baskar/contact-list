export const setContactData = (contact, event) => {
  let data = {...contact}
  if(event.target.id === 'firstName'){
      data = {
        ...data,
        name: {
          ...data.name,
          first: event.target.value
        }
      }
  }
  if(event.target.id === 'lastName'){
      data = {
         ...data,
         name: {
           ...data.name,
           last: event.target.value
         }
       }
  }
  if(event.target.id === 'cell'){
      data = {
        ...data,
        [event.target.id]: event.target.value
      }
  }
  if(event.target.id === 'email'){
    data = {
      ...data,
      [event.target.id]: event.target.value
    }
  }
  if(event.target.id === 'streetNumber'){
    data = {
      ...data,
      location: {
        ...data.location,
        street: {
          ...data.location.street,
          number: event.target.value
        }
      }
    }
  }
  if(event.target.id === 'streetName'){
      let street = {
        ...data.location.street,
        name: event.target.value
      }
      data = {
        ...data,
        location: {
          ...data.location,
          street: {
            ...data.location.street,
            name: event.target.value
          }
        } 
      }
  }
  if(event.target.id === 'city'){
     data = {
        ...data,
        location: {
          ...data.location,
          [event.target.id]: event.target.value
        } 
      }
  }
  if(event.target.id === 'state'){
    data = {
      ...data,
      location: {
        ...data.location,
        [event.target.id]: event.target.value
      } 
    }
  }
  if(event.target.id === 'postcode'){
    data = {
      ...data,
      location: {
        ...data.location,
        [event.target.id]: event.target.value
      } 
    }
  }
  if(event.target.id === 'country'){
    data = {
      ...data,
      location: {
        ...data.location,
        [event.target.id]: event.target.value
      } 
    }
  }
  return data
}