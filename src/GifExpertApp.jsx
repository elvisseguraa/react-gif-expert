import { useState } from "react"
// import { AddCategory } from './components/AddCategory'
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);
  // console.log( categories )

  // const onAddCategory = () => {
  //   // setCategories( [ ...categories, 'Pokemon' ] );
  //   // setCategories( cat => [ ...cat, 'Pokemon' ] );
  //   setCategories( [ 'Pokemon', ...categories ] );
  // }

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes( newCategory )) return;

    setCategories( [ newCategory, ...categories ] );
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      {/* <AddCategory setCategories={ setCategories } /> */}
      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ (value) => onAddCategory( value ) } 
      />

      {/* listado de gif */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}

        { 
          // categories.map( (category) => {
          //   // return <li key={ category }> {category} </li>
          //   return (
          //     <div key={ category }>
          //       <h3> { category } </h3>
          //       <li> {category} </li>
          //     </div>
          //   )
          // }) 
          categories.map( (category) => (
              <GifGrid 
                key={ category } 
                category={ category } />
          )) 
        }
        {/* <li>ABC</li> */}

    </>
  )
}