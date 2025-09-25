import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, XCircle, Info } from "lucide-react";
import { getTerritoryOptions, checkTerritoryAvailability } from "../data/store";

interface TerritoryAvailability {
  available: boolean;
  slotsRemaining?: number;
  message: string;
}

export default function TerritoryChecker() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedTehsil, setSelectedTehsil] = useState("");
  const [selectedPanchayat, setSelectedPanchayat] = useState("");
  const [states, setStates] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [tehsils, setTehsils] = useState<string[]>([]);
  const [panchayats, setPanchayats] = useState<string[]>([]);
  const [availability, setAvailability] = useState<TerritoryAvailability | null>(null);

  // Load states on component mount
  useEffect(() => {
    setStates(getTerritoryOptions("states"));
  }, []);

  // Load districts when state changes
  useEffect(() => {
    if (selectedState) {
      setDistricts(getTerritoryOptions("districts", selectedState));
    } else {
      setDistricts([]);
    }
  }, [selectedState]);

  // Load tehsils when district changes
  useEffect(() => {
    if (selectedState && selectedDistrict) {
      setTehsils(getTerritoryOptions("tehsils", `${selectedState},${selectedDistrict}`));
    } else {
      setTehsils([]);
    }
  }, [selectedState, selectedDistrict]);

  // Load panchayats when tehsil changes
  useEffect(() => {
    if (selectedState && selectedDistrict && selectedTehsil) {
      setPanchayats(getTerritoryOptions("panchayats", `${selectedState},${selectedDistrict},${selectedTehsil}`));
    } else {
      setPanchayats([]);
    }
  }, [selectedState, selectedDistrict, selectedTehsil]);

  // Check availability when all fields are selected
  useEffect(() => {
    if (selectedState && selectedDistrict && selectedTehsil && selectedPanchayat) {
      const result = checkTerritoryAvailability(selectedState, selectedDistrict, selectedTehsil, selectedPanchayat);
      setAvailability(result);
    } else {
      setAvailability(null);
    }
  }, [selectedState, selectedDistrict, selectedTehsil, selectedPanchayat]);


  const renderStatusBox = () => {
    if (!selectedState || !selectedDistrict || !selectedTehsil || !selectedPanchayat) {
      return (
        <div className="bg-muted text-muted-foreground rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <Info className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Select Your Location</span>
          </div>
          <p className="text-lg">Please select your desired location to check for open slots.</p>
        </div>
      );
    }

    if (!availability) {
      return (
        <div className="bg-muted text-muted-foreground rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <Info className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Checking Availability...</span>
          </div>
          <p className="text-lg">Please wait while we check slot availability.</p>
        </div>
      );
    }

    if (availability.available) {
      return (
        <div className="bg-trust text-white rounded-lg p-6 text-center" data-testid="status-available">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Congratulations!</span>
          </div>
          <p className="text-lg">{availability.message}</p>
        </div>
      );
    } else {
      return (
        <div className="bg-destructive text-white rounded-lg p-6 text-center" data-testid="status-unavailable">
          <div className="flex items-center justify-center mb-2">
            <XCircle className="text-2xl mr-3" />
            <span className="text-xl font-semibold">Sorry!</span>
          </div>
          <p className="text-lg">{availability.message}</p>
        </div>
      );
    }
  };

  return (
    <div className="bg-secondary/30 rounded-xl p-8 mb-12">
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center" data-testid="heading-territory-checker">
        Check Real-Time Slot Availability in Your Area
      </h3>
      
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Select 
          value={selectedState} 
          onValueChange={(value) => {
            setSelectedState(value);
            setSelectedDistrict("");
            setSelectedTehsil("");
            setSelectedPanchayat("");
          }}
          data-testid="select-state"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent>
            {states.map((state: string) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select 
          value={selectedDistrict} 
          onValueChange={(value) => {
            setSelectedDistrict(value);
            setSelectedTehsil("");
            setSelectedPanchayat("");
          }}
          disabled={!selectedState}
          data-testid="select-district"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>
          <SelectContent>
            {districts?.map((district: string) => (
              <SelectItem key={district} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select 
          value={selectedTehsil} 
          onValueChange={(value) => {
            setSelectedTehsil(value);
            setSelectedPanchayat("");
          }}
          disabled={!selectedDistrict}
          data-testid="select-tehsil"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Tehsil" />
          </SelectTrigger>
          <SelectContent>
            {tehsils?.map((tehsil: string) => (
              <SelectItem key={tehsil} value={tehsil}>
                {tehsil}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select 
          value={selectedPanchayat} 
          onValueChange={(value) => {
            setSelectedPanchayat(value);
          }}
          disabled={!selectedTehsil}
          data-testid="select-panchayat"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Panchayat" />
          </SelectTrigger>
          <SelectContent>
            {panchayats?.map((panchayat: string) => (
              <SelectItem key={panchayat} value={panchayat}>
                {panchayat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {renderStatusBox()}
    </div>
  );
}
