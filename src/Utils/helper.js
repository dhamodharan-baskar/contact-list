import moment from 'moment';

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

export const setDate = (contact, event) => {
let data = {...contact}
data = {
  ...contact,
  dob: {
    ...contact.dob,
    date: event,
    age: moment().diff(moment(event, "DD-MM-YYYY"), 'years')
  }
}
return data;
}

export const upLoadImage = (contact, e) => {
let data = {...contact}
data = {
  ...contact,
  picture: {
    ...contact.picture,
    large: URL.createObjectURL(e.target.files[0]),
    medium: URL.createObjectURL(e.target.files[0]),
    thumbnail: URL.createObjectURL(e.target.files[0]) 
  }
}
return data;
}