import { useState } from 'react';

function AddMovie({addMovie}){
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [hasOscar, setHasOscar] = useState('5');
    const [IMDBRating, setIMDBRating] = useState(false);

    const handleTitleInput = (event) => setTitle(event.target.value);
    const handleDirectorInput = (event) => setDirector(event.target.value);
    const handleIMDBRatingInput = (event) => setIMDBRating(event.target.value);
    const handleHasOscarInput = (event) => setHasOscar(event.target.checked);

    const handleSubmit = (event) => {        
        event.preventDefault();
        const newMovie = { title, director, IMDBRating, hasOscar };
     
        console.log("Submitted: ", newMovie);
        console.log('submit:', newMovie)
        addMovie(newMovie)
        resetForm();
      }
      //addMovie.addMovie(newMovie);

      const resetForm = () => {
         setTitle ('');
         setDirector('');
         setIMDBRating('');
         setHasOscar('');
      }

return (
    <div className='AddMovie'>
        <h4> Add Movie </h4>
        <form onSubmit={handleSubmit}>
            <label> Title:</label>
            <input type='text' name='title' value ={title} onChange = {handleTitleInput}/>
            <label> Director:</label>
            <input type='text' name='director' value ={director} onChange = {handleDirectorInput}/>
            <label> IMDBRating:</label>
            <input type='number' name='IMDBRating' value ={IMDBRating} onChange = {handleIMDBRatingInput}/>
            <label> Has Oscars:</label>
            <input type='checkbox' name='hasOscars' value ={hasOscar} onChange = {handleHasOscarInput}/>
        
            <button type='submit'> Add a Movie </button>
        </form>
    </div>

)

}
export default AddMovie;