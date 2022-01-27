import { Component } from "react";

class ContentArticle extends Component{
    render(){
        return(
            <div>
            <div className='container'><hr/>
                <div className="content">
                    <div>
                    <h2>Article 1</h2>
                    </div>
                    <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci ut repellat error earum aliquam perferendis, quam culpa. Illum laudantium nulla quasi tempora quae, commodi reprehenderit! Esse voluptatibus officiis eligendi.
                    </p>
                    </div>
                </div><hr/>

                <div className="content">
                    <div>
                    <h2>Article 2</h2>
                    </div>
                    <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias adipisci ut repellat error earum aliquam perferendis, quam culpa. Illum laudantium nulla quasi tempora quae, commodi reprehenderit! Esse voluptatibus officiis eligendi.
                    </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ContentArticle