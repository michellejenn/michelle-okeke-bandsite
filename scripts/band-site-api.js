export class BandSiteApi {
    constructor (apiKey){
        this.apiKey = apiKey || "72892b6f-7841-44d4-8a7a-f8c13ec9e38c";
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";

    }
    async postComment(newComment){
        try{
            const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, newComment)
            return response.data;
        }
        catch(error){
            console.error("Error posting comment", error)
        }    
    }
    async getComments(){
        try{
            const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`)
            return response.data;
        }
        catch(error){
            console.error("Error loading comments", error)
        }
    }
    async getShows(){
        try{
            const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`)
            return response.data;
        }
        catch(error){
            console.error("Error getting show dates", error)
        }
    }

}