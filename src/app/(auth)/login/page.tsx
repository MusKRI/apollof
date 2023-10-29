// **** Library Imports ****
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

// ***** Local Imports *****
// api
import { login } from "@/apiConfig/authApi";

// ui
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
// import { getAllPages } from "@/apiConfig/current-openings-apis";

const formSchema = z.object({
  username: z
    .string({
      required_error: "Email is required!",
    })
    .email("Invalid Email"),
  password: z
    .string({
      required_error: "password is required!",
    })
    .min(1, "enter password"),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginPage = () => {
  // 1. Define your form.
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate: loginMutation, isPending } = useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      toast.success("Login success!");
      form.reset();
      console.log(data);
    },

    onError: (error: AxiosError) => {
      console.log(error);
      toast.error(
        (
          error?.response?.data as {
            error: string;
            success: boolean;
          }
        ).error
      );
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: LoginFormValues) {
    const submitData = {
      ...values,
      login_method: "user_pass",
      get_user_details: 1,
    };

    loginMutation(submitData);
  }

  return (
    <div className="h-full flex md:justify-center md:items-center">
      <Card className="flex-1 md:flex-initial flex flex-col items-center justify-center px-10 py-6 md:px-16 md:py-12 shadow-lg w-full md:w-[600px]">
        <CardHeader className="flex flex-col items-center gap-5">
          <CardTitle className="text-primary">Log in Admin Panel</CardTitle>
        </CardHeader>

        <CardContent className="self-stretch space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full text-base"
                disabled={isPending}
              >
                {isPending ? (
                  <div className="loader"></div>
                ) : (
                  <span>Log in</span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
