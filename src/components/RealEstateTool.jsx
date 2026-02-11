import toolImg1 from "../assets/images/tool-1.jpg";
import toolImg2 from "../assets/images/tool-2.jpg";

const RealEstateTool = () => {
  return (
    <section className="real-estate-tool">
      <div className="container">

        {/* Card 1 – image niche RIGHT square */}
        <div className="tool-row">
          <div className="tool-image">
            <img src={toolImg1} alt="Real Estate Tool" />
            <div className="tool-square right"></div>
          </div>

          <div className="tool-content">
            <h4>No. 1 Real Estate Tool</h4>
            <p>
              The leading functions for professional real estate agents.
              All our functions are made to give the individuals agents
              the most successful listing creation.
            </p>
            <button>Learn more</button>
          </div>
        </div>

      
        <div className="tool-row reverse">
          <div className="tool-image">
            <img src={toolImg2} alt="Real Estate Tool" />
            <div className="tool-square left"></div>
          </div>

          <div className="tool-content">
            <h4>No. 1 Real Estate Tool</h4>
            <p>
              The leading functions for professional real estate agents.
              All our functions are made to give the individuals agents
              the most successful listing creation, import, market analytics
              and much more.
            </p>
            <button>Learn more</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RealEstateTool;
