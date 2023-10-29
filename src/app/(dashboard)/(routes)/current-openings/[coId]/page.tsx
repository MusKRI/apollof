// ***** Library Imports *****
// import { useParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// ****** Local Imports ******
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/textarea/textarea";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover/popover";

import { countryOptions } from "./utils/countries";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  title: z.string().min(1, "Title is required!"),
  desc: z.string().min(1, "Description is required!"),
  slug: z.string(),
  country_name: z.string().min(1, "Country is required!"),
  salary: z.string(),
  job_type: z.string(),
});

type CurrentOpeningFormValues = z.infer<typeof formSchema>;

const CurrentSingleOpening = () => {
  // const params = useParams() as {
  //   coId: string;
  // };

  // 1. Define your form.
  const form = useForm<CurrentOpeningFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      desc: "",
      slug: "",
      country_name: "",
      salary: "",
      job_type: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: CurrentOpeningFormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    // loginMutation(values);
  }

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="h-16 flex items-center justify-between border-b px-3 bg-slate-50 shrink-0">
        <h2 className="text-2xl lg:text-3xl font-bold">New Opening</h2>
      </div>

      <div className="p-4 space-y-4">
        <div className="max-w-lg">
          <p className="text-slate-600 text-sm">
            Fill details below to create new opening...
          </p>
        </div>

        <div className="relative">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Current opening title..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Current opening description..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Current opening slug..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country_name"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Country Name</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? countryOptions.find(
                                  (country) => country.value === field.value
                                )?.label
                              : "Select country"}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search country..."
                            className="h-9"
                          />
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup className="max-h-[300px] overflow-y-auto">
                            {countryOptions.map((country_name) => (
                              <CommandItem
                                value={country_name.label}
                                key={country_name.value}
                                onSelect={() => {
                                  form.setValue(
                                    "country_name",
                                    country_name.value
                                  );
                                }}
                              >
                                {country_name.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    country_name.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <Input placeholder="50k - 70k" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="job_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type</FormLabel>
                    <FormControl>
                      <Input placeholder="eg. Full Time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-row justify-end">
                <Button className="self-end" type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CurrentSingleOpening;
