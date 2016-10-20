import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/savings")
public class Savings {
	
	public long exp=50;
	public long sav;
	public long inc=100;
	 public long income,expenditure,savings,required_expenditure,unrequired_expenditure;
	  @GET
	  @Path("/calculatesavings")
	  @Produces("application/xml")
	  public long savings(long income,long expenditure){
		CalculateSavings object=new CalculateSavings();
		sav=object.savings(inc,exp);
		return sav;
	  }
	  
	  
	  

	@Path("{w}/{h}")
	  @GET
	  @Produces("application/json")
	  public Response first(@PathParam("w")long income,@PathParam("h")long expenditure) throws JSONException {
		JSONObject jsonObject = new JSONObject();
		float sav=income-expenditure;		
		
		jsonObject.put("income", income);
		jsonObject.put("expenditure",expenditure);
		jsonObject.put("savings", sav);
		
		

		String result = "" + jsonObject;
		return Response.status(200).entity(result).build();
	  }
}