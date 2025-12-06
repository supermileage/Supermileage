export default function Results() {
    return (
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <h2 className="text-4xl font-bold uppercase text-center">Results</h2>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-3">Prototype Class</h2>
              <table className="table-bordered">
                <tbody>
                  <tr><td>YEAR</td><td>COMPETITION</td><td>CATEGORY</td><td>RANK</td><td>MILEAGE</td></tr>
                  <tr><td>2022</td><td>SAE</td><td>Gasoline</td><td>2nd</td><td>1038 mpg</td></tr>
                  <tr><td>2022</td><td>SEMA</td><td>Hydrogen</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2021</td><td>SAE</td><td>Gasoline</td><td>5th</td><td>Virtual</td></tr>
                  <tr><td>2020</td><td>SAE</td><td>Gasoline</td><td>4th</td><td>Virtual</td></tr>
                  <tr><td>2019</td><td>SAE</td><td>Gasoline</td><td>2nd</td><td>2229 mpg</td></tr>
                  <tr><td>2019</td><td>SEMA</td><td>Gasoline</td><td>2nd</td><td>1372 mpg</td></tr>
                  <tr><td>2018</td><td>SAE</td><td>Gasoline</td><td>3rd</td><td>1407 mpg</td></tr>
                  <tr><td>2018</td><td>SEMA</td><td>Gasoline</td><td>7th</td><td>960 mpg</td></tr>
                  <tr><td>2017</td><td>SAE</td><td>Gasoline</td><td>6th</td><td>566 mpg</td></tr>
                  <tr><td>2017</td><td>SEMA</td><td>Gasoline</td><td>20th</td><td>521 mpg</td></tr>
                  <tr><td>2016</td><td>SAE</td><td>Gasoline</td><td>6th</td><td>715 mpg</td></tr>
                  <tr><td>2016</td><td>SEMA</td><td>Gasoline</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2015</td><td>SEMA</td><td>Gasoline</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2014</td><td>SEMA</td><td>Gasoline</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2013</td><td>SEMA</td><td>Gasoline</td><td>5th</td><td>1383 mpg</td></tr>
                  <tr><td>2008</td><td>SEMA</td><td>Gasoline</td><td>4th</td><td>1865 mpg</td></tr>
                  <tr><td>2006</td><td>SAE</td><td>Gasoline</td><td>1st</td><td>3145 mpg</td></tr>
                  <tr><td>2005</td><td>SAE</td><td>Gasoline</td><td>1st</td><td>1608 mpg</td></tr>
                  <tr><td>2004</td><td>SAE</td><td>Gasoline</td><td>1st</td><td>1747 mpg</td></tr>
                  <tr><td>2003</td><td>SAE</td><td>Gasoline</td><td>1st</td><td>927 mpg</td></tr>
                  <tr><td>2002</td><td>SAE</td><td>Gasoline</td><td>4th</td><td>895 mpg</td></tr>
                  <tr><td>2001</td><td>SAE</td><td>Gasoline</td><td>9th</td><td>295 mpg</td></tr>
                </tbody>
              </table>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-2xl font-bold mb-3">Urban Concept</h2>
              <table className="table-bordered">
                <tbody>
                  <tr><td>YEAR</td><td>COMPETITION</td><td>CATEGORY</td><td>RANK</td><td>MILEAGE</td></tr>
                  <tr><td>2022</td><td>SEMA</td><td>Battery Electric</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2021</td><td>SEMA</td><td>Battery Electric</td><td>1st</td><td>Virtual</td></tr>
                  <tr><td>2019</td><td>SEMA</td><td>Battery Electric</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2018</td><td>SEMA</td><td>Gasoline</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2017</td><td>SEMA</td><td>Gasoline</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2016</td><td>SEMA</td><td>Gasoline</td><td>DNF</td><td>-</td></tr>
                  <tr><td>2015</td><td>SEMA</td><td>Gasoline</td><td>2nd</td><td>325 mpg</td></tr>
                  <tr><td>2014</td><td>SEMA</td><td>Gasoline</td><td>3rd</td><td>325 mpg</td></tr>
                  <tr><td>2013</td><td>SEMA</td><td>Gasoline</td><td>2nd</td><td>577 mpg</td></tr>
                  <tr><td>2012</td><td>SEMA</td><td>Gasoline</td><td>3rd</td><td>288 mpg</td></tr>
                  <tr><td>2011</td><td>SEMA</td><td>Gasoline</td><td>4th</td><td>214 mpg</td></tr>
                  <tr><td>2010</td><td>SEMA</td><td>Gasoline</td><td>DNF</td><td>-</td></tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </section>
    );
};