"use client";

import { useCallback, useEffect, useState } from "react";

import Button from "../Button";
import { ArrowSvg } from "../../_icon";
import { cn } from "@/cn";

export const usePrevNextButtons = (emblaApi: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi
      .on("reInit", onSelect)
      .on("scroll", onSelect)
      .on("slideFocus", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props: any) => {
  return (
    <Button
      variant="icon"
      className="embla__arrow-left stroke-white flex items-center justify-center rotate-180 border-transparent"
      icon={
        <span className={cn("inline-block")}>
          <ArrowSvg />
        </span>
      }
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

export const NextButton = (props: any) => {
  const { children, ...restProps } = props;

  return (
    <Button
      variant="icon"
      icon={
        <span className={cn("flex items-center justify-center")}>
          <ArrowSvg />
        </span>
      }
      className="embla__arrow-right stroke-white border-transparent"
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};
