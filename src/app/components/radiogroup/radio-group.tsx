'use client'

import styles from "./radio-group.module.css";
import * as RadioGroup from "@radix-ui/react-radio-group";

function handleChange(changeEvent: any) {
  console.log({changeEvent});
}

export default function OddRadioGroup({

}) {
  return (
    <fieldset className={styles.radioGroupWrapper}>
      <legend className={styles.radioGroupLegend}>Motion Preferences</legend>
      <RadioGroup.Root
        className={styles.radioGroupRoot}
        defaultValue="system"
        aria-label="Motion preferences"
        onValueChange={handleChange}
      >
        <div className={styles.radioGroupItemWrapper}>
          <RadioGroup.Item className={styles.radioGroupItem} value="system" id="option-system">

            <RadioGroup.Indicator className={styles.radioGroupIndicator} />
          </RadioGroup.Item>
          <label className={styles.radioLabel} htmlFor="option-system">
            System
          </label>
        </div>
        <div className={styles.radioGroupItemWrapper}>
          <RadioGroup.Item className={styles.radioGroupItem} value="reduced" id="option-reduced">
            <RadioGroup.Indicator className={styles.radioGroupIndicator} />
          </RadioGroup.Item>
          <label className={styles.radioLabel} htmlFor="option-reduced">
            Reduced
          </label>
        </div>
        <div className={styles.radioGroupItemWrapper}>
          <RadioGroup.Item className={styles.radioGroupItem} value="normal" id="option-normal">
            <RadioGroup.Indicator className={styles.radioGroupIndicator} />
          </RadioGroup.Item>
          <label className={styles.radioLabel} htmlFor="option-normal">
            Normal
          </label>
        </div>
      </RadioGroup.Root>
    </fieldset>
  );
}
