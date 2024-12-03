import React from "react";

const List = ({ people }) => {  
  return (
    <>

    {/*Use map Method*/}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <>

          {/* Display Values from  Data.jsx File */}
            <div key={id} className="person"> {/*Display id*/}
               <img src={image} alt={image} /> {/*Display image*/}
               <div>
                <h1>{name}</h1>{/*Display name*/}
               </div>
               <div>
                <p>{age}</p>{/*Display age*/}
               </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
