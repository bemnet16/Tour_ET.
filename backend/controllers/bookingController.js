import Hotel from "../Models/hotelModel.js";
import Booking from "../Models/bookingModel.js";
import { authorizationChecker } from "../middleware/auth.js";

export const getAllBookings = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);

    if (auth === "NO-TOKEN") {
      return res.status(401).json({ message: "token reqired" });
    } else if (auth === "NOT-AUTHENTICATED") {
      return res.status(401).json({ message: "not auth" });
    }

    const bookings = await Booking.find({ user: auth.id });
    res.status(200).json({ data: bookings });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const calculatePrice = async (req, res) => {
  const auth = await authorizationChecker(req);

  if (auth === "NO-TOKEN") {
    return res.status(401).json({ message: "token reqired" });
  } else if (auth === "NOT-AUTHENTICATED") {
    return res.status(401).json({ message: "not auth" });
  }

  const { pricePerAdult, noOfPeople } = req.body;
  console.log(req.body);
  const discountTiers = [
    { items: 5, discount: 0.1 },
    { items: 10, discount: 0.2 },
    { items: 15, discount: 0.3 },
  ];
  function calculateDiscount(numItems) {
    const sortedTiers = discountTiers.sort((a, b) => b.items - a.items);
    const discountTier = sortedTiers.find((tier) => numItems >= tier.items);
    if (discountTier) {
      return discountTier.discount;
    }
    return 0;
  }

  const discount = calculateDiscount(noOfPeople);
  const totalPrice =
    noOfPeople * pricePerAdult - discount * (noOfPeople * pricePerAdult);
  res.status(200).json({ data: { totalPrice, discount } });
};
export const addBooking = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "NO-TOKEN") {
      return res.status(401).json({ message: "token reqired" });
    } else if (auth === "NOT-AUTHENTICATED") {
      return res.status(401).json({ message: "not auth" });
    }

    const craeteBody = { ...req.body, user: auth._id };
    const booking = await Booking.create(craeteBody);
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateBooking = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "NO-TOKEN") {
      return res.status(401).json({ message: "token reqired" });
    } else if (auth === "NOT-AUTHENTICATED") {
      return res.status(401).json({ message: "not auth" });
    }

    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({ msg: "No Hotel " });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const checkAndDeleteBooking = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "A") {
      return res.status(401).json({ message: "token reqired" });
    } else if (auth === "C") {
      return res.status(401).json({ message: "not auth" });
    }
    const depDate = await Booking.findOne({ _id: req.params.id }).select(
      "depDate"
    );
    const isValid = depDate.getTime() - new Date().getTime() > 172800;
    if (isValid) {
      const booking = await Booking.findOneAndDelete({ _id: req.params.id });
      return res.status(200).json({ data: booking });
    } else {
      res.status(400).json({ msg: "" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteBooking = async (req, res) => {
  try {
    const auth = await authorizationChecker(req);
    if (auth === "A") {
      return res.status(401).json({ message: "token reqired" });
    } else if (auth === "C") {
      return res.status(401).json({ message: "not auth" });
    }
    const booking = await Booking.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ data: booking });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
