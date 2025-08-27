import { TextInput, Button, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function FormBooking() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // console.log(data);
  };
  return (
    <>
      <Text>Номер телефону</Text>
      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="border-blue-700 border-[1px] rounded-xl p-1"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Text>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="border-blue-700 border-[1px] rounded-xl p-1"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />{" "}
    </>
  );
}
