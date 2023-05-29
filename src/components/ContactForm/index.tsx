"use client";

import React, { useCallback } from "react";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ApiFieldError } from "@/app/api/types";
import schema, { FieldValues } from "./validator";

const ContactForm = () => {
  const {
    reset,
    register,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });

  const handleSuccess = useCallback(() => {
    window.open("/files/publicidade_e_propaganda.pdf", "_blank");
    reset();
  }, [reset]);

  const hanldleError = useCallback(
    async ({ response }: { response?: Response }) => {
      const json = (await response?.json()) as ApiFieldError<FieldValues>;
      setError(json.field, { message: json.message });
    },
    [setError]
  );

  return (
    <Form
      action="/api/contact"
      method="post"
      control={control}
      encType="application/json"
      onSuccess={handleSuccess}
      onError={hanldleError}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nome<span className="text-red-500">*</span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email<span className="text-red-500">*</span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Telefone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="tel"
          placeholder="Digite seu telefone"
          {...register("phone")}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={isSubmitting}
        >
          Enviar
        </button>
      </div>
    </Form>
  );
};

export default ContactForm;
