import React,{Component} from 'react';

class Items extends Component{
    render(){
        const {items}=this.props
        const theItems=items.map(item =>{
            return(
                <div key={Math.random()*10}>
                    <p>{item.id}</p>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            )
        })
        //const id=this.propos.id;
        //const name=this.propos.name;
        //const age=this.propos.age;
        //const {id1,name1,age1}=this.propos;
        return(
            <div>
                {theItems}
           
            </div>
        )
    }
}

export default Items;