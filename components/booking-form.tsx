"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormValues {
  name: string;
  contact: string;
  age: string;
  level: string;
  message: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
}

const initialValues: FormValues = {
  name: "",
  contact: "",
  age: "",
  level: "Не знаю свой уровень",
  message: "",
};

export function BookingForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(current: FormValues): FormErrors {
    const nextErrors: FormErrors = {};
    if (current.name.trim().length < 2) {
      nextErrors.name = "Пожалуйста, укажите имя (минимум 2 символа)";
    }
    if (current.contact.trim().length < 5) {
      nextErrors.contact = "Укажите телефон, e-mail или Telegram для связи";
    }
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange<K extends keyof FormValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="font-heading mt-5 text-xl font-semibold text-foreground">
          Спасибо, {values.name}!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Заявка получена. Я свяжусь с вами в ближайшее время по указанным
          контактам, чтобы подобрать удобное время для урока.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setValues(initialValues);
            setSubmitted(false);
          }}
        >
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Имя *
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Как к вам обращаться"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-primary-dark">{errors.name}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-foreground">
            Телефон, e-mail или Telegram *
          </label>
          <input
            id="contact"
            type="text"
            value={values.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            placeholder="Как с вами связаться"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
            aria-invalid={Boolean(errors.contact)}
          />
          {errors.contact && (
            <p className="mt-1.5 text-xs text-primary-dark">{errors.contact}</p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-foreground">
            Возраст ученика
          </label>
          <input
            id="age"
            type="text"
            value={values.age}
            onChange={(e) => handleChange("age", e.target.value)}
            placeholder="Например, 28 лет или 10 лет"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="level" className="mb-1.5 block text-sm font-medium text-foreground">
            Уровень испанского
          </label>
          <select
            id="level"
            value={values.level}
            onChange={(e) => handleChange("level", e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
          >
            <option>Не знаю свой уровень</option>
            <option>Начинающий (с нуля)</option>
            <option>Начальный (A1–A2)</option>
            <option>Средний (B1–B2)</option>
            <option>Продвинутый (C1–C2)</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Комментарий
          </label>
          <textarea
            id="message"
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Расскажите о своей цели: путешествия, работа, экзамен..."
            rows={4}
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        Отправить заявку
      </Button>
      <p className="mt-3 text-xs text-muted">
        Нажимая «Отправить заявку», вы соглашаетесь на обработку указанных
        контактных данных для связи с вами.
      </p>
    </form>
  );
}
