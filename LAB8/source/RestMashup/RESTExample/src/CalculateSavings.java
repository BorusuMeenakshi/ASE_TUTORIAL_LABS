import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
@Path("/calculatesavings")
public class CalculateSavings {
	


	
		
		public long saving;
		@GET
	@Produces("application/xml")

	public long savings(long income,long expenditure)
	{
			saving = income-expenditure;
		return saving;
	}
	}
