import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
         fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-3xl">All Categories</h2>
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} className="block font-semibold text-gray-500" key={category.id}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;