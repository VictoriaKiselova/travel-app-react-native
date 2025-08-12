import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { TourList } from "@/types/tours";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import FiltersByNutrition from "../FiltersByNutrition/FiltersByNutrition";
import { useToursContext } from "@/components/Context/ToursContext";

type Props = {
  tours: TourList;
};

export default function SearchByFilters({ tours }: Props) {
  const { allTours, setTours, filters, setFilters, setIsFilterApplied } =
    useToursContext();

  const transportItems = [
    { label: "Автобус", value: "Автобус" },
    { label: "Авіа", value: "Авіа" },
  ];

  const [openCountry, setOpenCountry] = useState(false);
  const [openTransport, setOpenTransport] = useState(false);
  const [items, setItems] = useState([
    { label: "Албанія", value: "Албанія" },
    { label: "Єгипет", value: "Єгипет" },
    { label: "Іспанія", value: "Іспанія" },
    { label: "Італія", value: "Італія" },
    { label: "Туреччина", value: "Туреччина" },
    { label: "Франція", value: "Франція" },
    { label: "Чорногорія", value: "Чорногорія" },
    { label: "Шрі-Ланка", value: "Шрі-Ланка" },
  ]);

  function handleFilterTour() {
    const filteredTours = allTours.filter(
      item => item.country === filters.country
    );

    setTours(filteredTours);
    setIsFilterApplied(true);
  }

  return (
    <View className="px-3 mb-3">
      <Text className="text-blue-900 font-[500] text-[14px] leading-[1] text-left mb-3">
        Підібрати тур:
      </Text>

      <View>
        <View className="flex items-start mb-3">
          <View className="flex-row items-start gap-3">
            <DropDownPicker
              open={openCountry}
              value={filters.country}
              items={items}
              setOpen={setOpenCountry}
              setValue={callbackOrValue => {
                if (typeof callbackOrValue === "function") {
                  setFilters(prev => ({
                    ...prev,
                    country: callbackOrValue(prev.country),
                  }));
                } else {
                  setFilters(prev => ({ ...prev, country: callbackOrValue }));
                }
              }}
              setItems={setItems}
              placeholder="Оберіть країну"
              placeholderStyle={{
                fontSize: 12,
                color: "#8c95a3",
              }}
              containerStyle={{
                width: 200,
                marginBottom: 12,
              }}
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#8c95a3",
                borderWidth: 0,
                width: 200,
              }}
              dropDownContainerStyle={{
                width: 200,
                borderWidth: 0,
                borderColor: "#8c95a3",
              }}
            />

            <DropDownPicker
              open={openTransport}
              value={filters.transport}
              items={transportItems}
              setOpen={setOpenTransport}
              setValue={callbackOrValue => {
                if (typeof callbackOrValue === "function") {
                  setFilters(prev => ({
                    ...prev,
                    transport: callbackOrValue(prev.transport),
                  }));
                } else {
                  setFilters(prev => ({
                    ...prev,
                    transport: callbackOrValue,
                  }));
                }
              }}
              placeholder="Транспорт"
              placeholderStyle={{
                fontSize: 12,
                color: "#8c95a3",
              }}
              containerStyle={{
                width: 126,
                marginBottom: 12,
              }}
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#8c95a3",
                borderWidth: 0,
              }}
              dropDownContainerStyle={{
                width: 126,
                borderWidth: 0,
                borderColor: "#8c95a3",
              }}
            />
          </View>
          <View className="flex-row items-center gap-3 mb-3">
            <View className="flex items-start">
              <Text className="text-blue-900 font-[400] text-[12px] leading-[1] text-left mb-1">
                Дорослі
              </Text>
              <TextInput
                className="bg-white w-[56px] first-line:text-[14px] px-2 py-0 rounded-lg"
                placeholder="0"
                placeholderTextColor="#A0A0A0"
                value={
                  filters.peopleCount !== null
                    ? filters.peopleCount.toString()
                    : ""
                }
                onChangeText={text =>
                  setFilters(prev => ({
                    ...prev,
                    peopleCount: text === "" ? null : Number(text),
                  }))
                }
                cursorColor="#E0E0E0"
                style={{ height: 40 }}
              />
            </View>

            <View className="flex items-start">
              <Text className="text-blue-900 font-[400] text-[12px] leading-[1] text-left mb-1">
                Діти
              </Text>
              <TextInput
                className="bg-white w-[56px] first-line:text-[14px] px-2 py-0 rounded-lg"
                placeholder="0"
                placeholderTextColor="#A0A0A0"
                value={
                  filters.childrenCount !== null
                    ? filters.childrenCount.toString()
                    : ""
                }
                onChangeText={text =>
                  setFilters(prev => ({
                    ...prev,
                    childrenCount: text === "" ? null : Number(text),
                  }))
                }
                cursorColor="#E0E0E0"
                style={{ height: 40 }}
              />
            </View>

            <View className="flex items-start">
              <Text className="text-blue-900 font-[400] text-[12px] leading-[1] text-left mb-1">
                Ночі
              </Text>
              <TextInput
                className="bg-white w-[56px] first-line:text-[14px] px-2 py-0 rounded-lg"
                placeholder="0"
                placeholderTextColor="#A0A0A0"
                value={filters.nights !== null ? filters.nights.toString() : ""}
                onChangeText={text =>
                  setFilters(prev => ({
                    ...prev,
                    nights: text === "" ? null : Number(text),
                  }))
                }
                cursorColor="#E0E0E0"
                style={{ height: 40 }}
              />
            </View>
          </View>
        </View>

        <FiltersByNutrition filters={filters} setFilters={setFilters} />
        <TouchableOpacity
          onPress={() => handleFilterTour()}
          activeOpacity={0.7}
          className="flex items-center py-3 px-4 bg-blue-400 rounded-[16px] mb-3">
          <Text className="text-white-100 font-[400] text-[14px] leading-[1] text-center">
            Показати результати
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
