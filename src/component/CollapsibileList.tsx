import React, { useState } from 'react';

interface userType{
    cell:string;
    bob:any;
    email:string;
    gender:string;
    id:any;
    location:any;
    name:{
        title:string;
        first:string;
        last:string;
    };
    nat:string;
    phone:string;
    picture:any;
    registered:{
        age:number;
        date:string
    }
}

interface countryType{
    country: string;
    users:userType[]
}

interface CollapsibleListProps {
    countries: countryType[];
}

const CollapsibleList: React.FC<CollapsibleListProps> = ({countries}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const list = countries.map((country, index) => {

    /**
     * Sort according to the time of registration
     */
    country.users.sort((a, b) => new Date(a.registered.date).getTime() - new Date(b.registered.date).getTime())
    const userList = country.users.map((user:userType, index)=>{
        
        return(
        <div key={user.registered.date}>
            <h6>number: {index + 1}</h6>
            <h6>name: {user.name.first} {user.name.last}</h6>
            <h6>gender: {user.gender}</h6>
            <h6>city: {user.location.city}</h6>
            <h6>state: {user.location.state}</h6>
            <h6>registered: {user.registered.date}</h6>
        </div>)
        
    })
    return (
        <li key={country.country} onClick={() => toggleItem(index)}>
          {country.country}
          {index === activeIndex && (
            <div>
              {/* 展开的内容 */}
              {userList}
            </div>
          )}
        </li>
      )
  }) 

  return (
    <ul>
      {list}
    </ul>
  );
};

export default CollapsibleList;