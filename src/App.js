import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Travles from "./Travels";
import TOURS from "./Trours";
import Bookings from "./Bookings";
import BookingDetails from "./BookingDetails";
import Home from "./Home";
import Mountains from "./Mountains";
import Luxuary from "./Luxury";
import Temples from "./Temple";
import UserProfile from "./UserProfile";
import Beaches from "./Beaches";
import Cities from "./Cities";
import Forest from "./Forest";
import History from "./History";
import Adventures from "./Adventures";
import LandingPage from "./Landing";
import LoginPage from "./Login";
import Layout from "./Layout";
import LuxuryApp from "./Luxury";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>

          {/* NO NAVBAR */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* WITH NAVBAR */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/travels" element={<Travles />} />
            <Route path="/tours" element={<TOURS />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/bookingdetails" element={<BookingDetails />} />
            <Route path="/mountain" element={<Mountains />} />
            <Route path="/luxuary" element={<Luxuary />} />
            <Route path="/temples" element={<Temples />} />
            <Route path="/beaches" element={<Beaches />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/forest" element={<Forest />} />
            <Route path="/historical" element={<History />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/luxuary" element={<Luxuary/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
