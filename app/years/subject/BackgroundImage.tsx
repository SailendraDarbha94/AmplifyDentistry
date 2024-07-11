import { useEffect, useState } from "react";
import { View, Image } from "react-native";

const BackgroundImage = ({ subject }: any) => {
  const [tester, setTester] = useState<any>(null);
  const bgImager = async () => {
    switch (subject) {
      case "Human-Anatomy":
        setTester(
          <Image
            source={require("@/assets/subjects/Human-Anatomy.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Human-Physiology":
        setTester(
          <Image
            source={require("@/assets/subjects/Human-Physiology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Dental-Anatomy-&-Histology":
        setTester(
          <Image
            source={require("@/assets/subjects/Dental-Anatomy-&-Histology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Biochemistry":
        setTester(
          <Image
            source={require("@/assets/subjects/Biochemistry.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      // Second Year
      case "Pharmacy":
        setTester(
          <Image
            source={require("@/assets/subjects/Pharmacy.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Pre-Clinical-Prosthodontics":
        setTester(
          <Image
            source={require("@/assets/subjects/Pre-Clinical-Prosthodontics.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Pre-Clinical-Endodontics":
        setTester(
          <Image
            source={require("@/assets/subjects/Pre-Clinical-Endodontics.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Dental-Materials":
        setTester(
          <Image
            source={require("@/assets/subjects/Dental-Materials.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Microbiology":
        setTester(
          <Image
            source={require("@/assets/subjects/Microbiology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Pathology":
        setTester(
          <Image
            source={require("@/assets/subjects/Pathology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      // Third Year
      case "Oral-Pathology":
        setTester(
          <Image
            source={require("@/assets/subjects/Oral-Pathology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "General-Surgery":
        setTester(
          <Image
            source={require("@/assets/subjects/General-Surgery.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "General-Medicine":
        setTester(
          <Image
            source={require("@/assets/subjects/General-Medicine.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      // Fourth Year
      case "Oral-Medicine-&-Radiology":
        setTester(
          <Image
            source={require("@/assets/subjects/Oral-Medicine-&-Radiology.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Oral-Surgery":
        setTester(
          <Image
            source={require("@/assets/subjects/Oral-Surgery.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Endodontics":
        setTester(
          <Image
            source={require("@/assets/subjects/Endodontics.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Pedodontics":
        setTester(
          <Image
            source={require("@/assets/subjects/Pedodontics.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Periodontics":
        setTester(
          <Image
            source={require("@/assets/subjects/Periodontics.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Orthodontics":
        setTester(
          <Image
            source={require("@/assets/subjects/Orthodontics.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Prosthodontics":
        setTester(
          <Image
            source={require("@/assets/subjects/Prosthodontics.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      case "Public-Health-Dentistry":
        setTester(
          <Image
            source={require("@/assets/subjects/Public-Health-Dentistry.png")}
            resizeMode="stretch"
            className="w-full h-full"
          />
        );
        break;
      default:
        setTester(
          <Image
            source={require("@/assets/final/first-year.png")}
            resizeMode="cover"
            className="w-full h-full"
          />
        );
    }
  };
  
  
  useEffect(() => {
    bgImager()
  },[])

  return (
    <View>
      {tester ? (
        tester
      ) : (
        <Image
          source={require("@/assets/final/first-year.png")}
          resizeMode="cover"
          className="w-full h-full"
        />
      )}
    </View>
  );
};

export default BackgroundImage;
