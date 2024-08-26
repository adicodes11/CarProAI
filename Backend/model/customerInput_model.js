import mongoose from 'mongoose';

const customerRequirementsInputSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  budget: {
    type: {
      min: Number,
      max: Number,
    },
    required: true,
  },
  bodyType: {
    type: String,
    enum: ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Pickup'],
    required: true,
  },
  primaryUse: {
    type: String,
    enum: ['Daily Commute', 'Family Trips', 'Off-Road', 'Luxury', 'Sport', 'Other'],
    required: true,
  },
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Other'],
    required: true,
  },
  transmissionType: {
    type: String,
    enum: ['Manual', 'Automatic'],
    required: true,
  },
  seatingCapacity: {
    type: Number,
    required: true,
  },
  preferredColor: {
    type: String,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const CustomerRequirements = mongoose.model('CustomerRequirements', customerRequirementsInputSchema);

export default CustomerRequirements;
