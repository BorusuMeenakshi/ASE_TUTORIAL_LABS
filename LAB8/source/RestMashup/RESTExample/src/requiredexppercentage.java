import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/requiredexppercentage")
public class requiredexppercentage {

	public long exp=50;
	public long unreqexp=20;
	public long reqexp=30;
	public long sav;
	public long inc=100;
	 public long income,expenditure,savings,required_expenditure,unrequired_expenditure;
	 
	  public long reqperecent=((reqexp)/(unreqexp+reqexp))*100;
	  

	 
	  
	  
	  

	@Path("{r}/{ur}")
	  @GET
	  @Produces("application/json")
	  public Response first(@PathParam("r")long requiredexpernditure,@PathParam("ur")long unrequiredexpenditure) throws JSONException {
		JSONObject jsonObject = new JSONObject();
		float denom=requiredexpernditure+unrequiredexpenditure;
		float reqperc=(requiredexpernditure/denom)*100;		
		jsonObject.put("Unrequired Expenditure", unrequiredexpenditure);
		jsonObject.put("Required Expenditure",requiredexpernditure);
		jsonObject.put("Required expenditure percentage share", reqperc);
		
		

		String result = "" + jsonObject;
		return Response.status(200).entity(result).build();
	  }
}