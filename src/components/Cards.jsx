import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white mt-4 my-3 p-3">

        <div className="card card-compact w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure><img src={item.image} alt="Coding" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Read More</button>

              </a>
            </div>
          </div>
        </div>









        {/* <div className="mt-4 my-3 p-3">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
    <a href={item.link} target="_blank" rel="noopener noreferrer">
    <button className="btn btn-primary">Read More</button>

    </a>
      
    </div>
  </div>
</div> */}




      </div>
    </>
  );
}

export default Cards;
