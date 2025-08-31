import { TextInput, Text, Keyboard, Pressable, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAuthContext } from "../Context/AuthContext";
import { IFormBookingValues } from "@/types/bookingForm";

interface FormBookingProps {
  nameTour: string | undefined;
}

export default function FormBooking({ nameTour }: FormBookingProps) {
  const { user } = useAuthContext();
  const { control, handleSubmit } = useForm<IFormBookingValues>({
    defaultValues: {
      titleTour: nameTour ?? "",
      phone: "",
      email: user?.email ?? "",
      name: user?.name ?? "",
      quantityAdults: "",
      quantityChild: "",
    },
  });

  const onSubmit = (data: any) => {
    if (!data.phone) {
      return;
    }
  };

  return (
    <>
      <View className="flex-row items-start gap-3">
        <View>
          <Text className="text-black-300 font-[500] text-[12px] leading-[1.3] mb-1">
            Дорослі
          </Text>
          <Controller
            control={control}
            name="quantityAdults"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextInput
                style={{ width: 60 }}
                className=" border-blue-700 border-[1px] rounded-lg py-1 px-2 mb-2"
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
                returnKeyType="done"
                onSubmitEditing={() => Keyboard.dismiss()}
                submitBehavior="blurAndSubmit"
              />
            )}
          />
        </View>

        <View>
          <Text className="text-black-300 font-[500] text-[12px] leading-[1.3] mb-1">
            Дорослі
          </Text>
          <Controller
            control={control}
            name="quantityChild"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextInput
                style={{ width: 60 }}
                className=" border-blue-700 border-[1px] rounded-lg py-1 px-2 mb-2"
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
                returnKeyType="done"
                onSubmitEditing={() => Keyboard.dismiss()}
                submitBehavior="blurAndSubmit"
              />
            )}
          />
        </View>
      </View>

      <Text className="text-black-300 font-[500] text-[12px] leading-[1.3] mb-1">
        Ім&rsquo;я
      </Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="border-blue-700 border-[1px] rounded-lg py-1 px-2 mb-2"
            onChangeText={onChange}
            value={user?.name}
          />
        )}
      />
      <Text className="text-black-300 font-[500] text-[12px] leading-[1.3] mb-1">
        Номер телефону
      </Text>
      <Controller
        control={control}
        name="phone"
        rules={{
          required: "Телефон обов&rsquo;язковий",
          pattern: {
            value: /^\+380\d{9}$/,
            message: "Телефон має бути у форматі +380XXXXXXXXX",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              className="border-blue-700 border-[1px] rounded-lg py-1 px-2 mb-2"
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
              submitBehavior="blurAndSubmit"
            />
            {error && (
              <Text className="text-red-500 font-[500] text-[10px] leading-[1.3] -mt-1">
                {error.message}
              </Text>
            )}
          </>
        )}
      />

      <Text className="text-black-300 font-[500] text-[12px] leading-[1.3] mb-1">
        Email
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="border-blue-700 border-[1px] rounded-lg py-1 px-2 mb-5"
            onChangeText={onChange}
            value={user?.email}
          />
        )}
      />

      <Pressable
        onPress={handleSubmit(onSubmit)}
        className="bg-blue-700 rounded-lg py-2 px-4">
        <Text className="text-white text-center font-medium">Відправити</Text>
      </Pressable>
    </>
  );
}
