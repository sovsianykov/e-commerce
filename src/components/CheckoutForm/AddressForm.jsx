//
// import * as React from 'react';
// import {useEffect, useState} from "react";
// import { InputLabel , Select, MenuItem, Button, Grid, Typography, } from '@material-ui/core'
// import {useForm, FormProvider} from "react-hook-form";
// import FormInput from "./CustomTextField";
//
//
// import { commerce } from "../../lib/commerse";
//
//
// const AddressForm =({checkoutToken}) => {
//      const [shippingCountries, setShippingCountries] = useState([])
//      const [shippingCountry, setShippingCountry] = useState('')
//      const [shippingSubdivisions, setShippingSubdivisions] = useState([])
//      const [shippingSubdivision, setShippingSubdivision] = useState('')
//      const [shippingOptions, setShippingOptions] = useState([])
//      const [shippingOption, setShippingOption] = useState('')
//     const methods = useForm()
//     const countries = Object.entries(shippingCountries).map(([code, name]) =>({id: code, label: name}) )
//     console.log( countries)
//
//     const fetchShippingCountries = async (checkoutTokenId) => {
//          const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)
//          setShippingCountries(countries);
//          setShippingCountry(Object.keys(countries)[0])
//
//     }
//
//
//     useEffect(() => {
//        fetchShippingCountries(checkoutToken.id)
//
//     },[])
//
//     return (
//         <>
//             <Typography variant='h6' gutterBottom>Shipping Address</Typography>
//              <FormProvider {...methods}>
//                  <form onSubmit='' >
//                      <Grid spacing={3} container>
//                       <FormInput required name='firstName' label='First Name' />
//                       <FormInput required name='lastName' label='Last Name' />
//                       <FormInput required name='address1' label='Address' />
//                       <FormInput required name='email' label='Email' />
//                       <FormInput required name='city' label='City' />
//                       <FormInput required name='zyp' label='ZYP / or Postal code' />
//                       <Grid item xs={12} sm={6}>
//                           <InputLabel>Shipping Country</InputLabel>
//                           <Select value={shippingCountry} fullWidth
//                                   onChange={(e)=>setShippingCountry(e.target.value)}>
//                               {countries.map((country) => (
//                                   <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>
//
//                               ))}
//                           </Select>
//                       </Grid>
//                       {/*   <Grid item xs={12} sm={6}>*/}
//                       {/*       <InputLabel>Shipping Subdivisions</InputLabel>*/}
//                       {/*       <Select value={} fullWidth onChange={}>*/}
//                       {/*           <MenuItem key={} value={}>Select me</MenuItem>*/}
//                       {/*       </Select>*/}
//                       {/*   </Grid>*/}
//                       {/*   <Grid item xs={12} sm={6}>*/}
//                       {/*       <InputLabel>Shipping Options</InputLabel>*/}
//                       {/*       <Select value={} fullWidth onChange={}>*/}
//                       {/*           <MenuItem key={} value={}>Select me</MenuItem>*/}
//                       {/*       </Select>*/}
//                       {/*   </Grid>*/}
//                      </Grid>
//                  </form>
//
//              </FormProvider>
//         </>
//     );
// }
// export default AddressForm