import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment"

class Saved extends Component {

    state= {
        saved: []

    }

    componentWillMount() {
        this.loadSavedArticles();
    }

    loadSavedArticles = () => {
        API.getArticles()
        .then(res=>{
            console.log(res)
            this.setState({
               saved: res.data 
            })
        })
        .catch(err=>(console.log(err)))
    }

    handleDeleteArticle = (id) => {
        API.deleteArticle(id) 
        .then(res=>{
            console.log(res)
            this.loadSavedArticles();
        })
        .catch(err=>(console.log(err)))
    }

    render() {
        return(
            <div className="card">
                <h3 className="card-header">Saved Articles</h3>
                    <div className="card-body">
                    {this.state.saved.map(article => {
                        return (
                            <div>
                                <div className="row">
                                        <div className="col-10">
                                            <p> <a href={article.url}>{article.title}</a></p>
                                            <p>{moment(article.date).format("MMM Do, YYYY")}.</p>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-danger" onClick={() => this.handleDeleteArticle(article._id)}>Delete</button>

                                        </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
            </div>
        )
    }

}



export default Saved;