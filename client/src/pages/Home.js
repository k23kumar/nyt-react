import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment"

class Home extends Component {

    state= {
        topic: "",
        startYear: "",
        endYear: "",
        results: []
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);

    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("in handle form submit")

        API.search({
            q: this.state.topic,
            begin_date: this.state.startYear ? this.state.startYear + "0101" : null,
            end_date: this.state.endYear ? this.state.endYear + "1231" : null,
        })
        .then(res => {
            console.log(res.data.response.docs)
            this.setState({
                results: res.data.response.docs.slice(0,5)
            })
        })
        .catch(err =>console.log(err))

    }

    handleSaveArticle = (article) => {
        const newArticle = {
            title: article.headline.main,
            date: article.pub_date,
            url: article.web_url

        }

        API.saveArticle(newArticle)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className= "card"> 
                    
                    <h3 className="card-header">Search</h3>
                        <div className="card-body">
                            <form onChange={this.handleInputChange}>
                                <div className="form-group">
                                <label htmlFor="topic">Topic</label>
                                <input type="text" class="form-control" id="topic" name="topic" aria-describedby="topic" placeholder="Enter a topic"></input>
                                <small id="inputHelp" class="form-text text-muted">Search news items here.</small>
                                </div>
                                <div className="form-group">
                                <label htmlFor="startYear">Start Year</label>
                                <input type="text" class="form-control" id="startYear" name="startYear" aria-describedby="startYear" placeholder="Enter a year"></input>
                                </div>
                                <div className="form-group">
                                <label htmlFor="endYear">End Year</label>
                                <input type="text" class="form-control" id="endYear" name="endYear" aria-describedby="endYear" placeholder="Enter a year"></input>
                                </div>
                                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary">Search</button>
                        
                            </form>
                        </div>
                </div>
                <br/>
                <div className= "card">
                  <h3 className="card-header">Results</h3>
                    <div className="card-body">
                        {this.state.results.map(article => {
                            return (
                                <div>
                                    <div className="row">
                                        <div className="col-10">
                                            <p> <a href={article.web_url}>{article.headline.main}</a></p>
                                            <p>{moment(article.pub_date).format("MMM Do, YYYY")}.</p>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-primary" onClick={() => this.handleSaveArticle(article)}>Save</button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>



                 </div>




            </div>


        )
    }


}





export default Home;