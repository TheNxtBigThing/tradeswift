import Owner from "../models/owner.js";
export const createOwner = async (req, res) => {
  try {
    const {
      name,
      contact,
      email,
      adhar,
      pancard,
      address,
    
    } = req.body;
    const newowner = new Owner({
        name,
        contact,
        email,
        adhar,
        pancard,
        address,
    });

    const createdowner = await newowner.save();
    res.status(201).json(createdowner);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getOwner = async (req, res) => {
    try {
      const { id } = req.params; 
      const fetchOwner = await Owner.findById(id); // Use findById to search by document ID
      if (fetchOwner) {
        res.status(200).json(fetchOwner);
      } else {
        res.status(404).json({ message: "Owner not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
