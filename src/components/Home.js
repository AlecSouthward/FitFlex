import '../CSS/Home.css'

const Home = () => (
    <div>
        <h1 style={{ textAlign: "center" }}>Home</h1>

        <div className='info-box'>
            {/* Product images */}
            <div className="images">
                <img alt='Pilates Ring' src='PilatesRing.webp' />
                <img alt='Push Up Bars' src='PushUpBars.webp' />
                <img alt='Roller Wheel' src='RollerWheel.webp' />
            </div>

            <div className='blurb'>
                {/* Blurb for the home page */}
                <p>
                    <h2>Welcome to FitFlex Gear,</h2>
                    your one-stop destination
                    for premium fitness essentials.
                    Discover a world of possibilities
                    with our carefully curated
                    range of exercise gear, designed
                    to elevate your workouts and
                    inspire a healthier, more active
                    lifestyle. From resistance
                    bands to smart fitness trackers,
                    we've got you covered. At
                    FitFlex Gear, we're not just
                    selling equipment - we're
                    empowering your fitness journey.
                    Start your adventure with us
                    today and redefine what's
                    possible in your pursuit of
                    wellness. FitFlex Gear: Gear
                    up, get fit, and embrace the
                    best version of yourself.
                </p>
            </div>
        </div>
    </div>
);

export default Home;