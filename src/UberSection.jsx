import "./UberSection.css";
import girlImage from './girl.png';  // Update import to use .png

export default function UberSection() {
  return (
    <section className="uber-section">
      {/* Left Content */}
      <div className="uber-left">
        <h1>
          Tap , Get , Reach <br /> Uber
        </h1>

        <form className="ride-form">
          <input type="text" placeholder="Pickup location" className="form-input" />
          <input type="text" placeholder="Dropoff location" className="form-input" />

          <div className="form-row">
            <div class="time-field">
  <input type="time" className="form-input half" required />
  <span class="placeholder">Select time</span>
</div>
            <input 
  type="date" 
  className="form-input half"
  onfocus="this.showPicker()" 
  placeholder="Select a date" 
/>
          </div>

          <button type="submit" className="btn">
            See prices
          </button>
        </form>

        <p className="recent-activity">
          Log in to see your recent activity
        </p>
      </div>

      {/* Right Content (Image) */}
      <div className="uber-right">
        <img src={girlImage} alt="Uber rider" />
      </div>
    </section>
  );
}