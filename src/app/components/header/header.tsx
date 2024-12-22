import Link from "../link/link";
import styles from "./header.module.css";
import Logo from "../logo/logo";
import * as RadioGroup from "@radix-ui/react-radio-group";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
        OddDev
      </div>
      <section className={styles.banner}>
        <fieldset className={styles.radioGroupWrapper}>
          <legend className={styles.radioGroupLegend}>Motion Preferences</legend>
          <RadioGroup.Root
            className={styles.RadioGroupRoot}
            defaultValue="system"
            aria-label="Motion preferences"
          >
            <div className={styles.RadioGroupItemWrapper}>
              <RadioGroup.Item className={styles.RadioGroupItem} value="system" id="option-system">
                <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
              </RadioGroup.Item>
              <label className={styles.Label} htmlFor="option-system">
                System
              </label>
            </div>
            <div className={styles.RadioGroupItemWrapper}>
              <RadioGroup.Item className={styles.RadioGroupItem} value="reduced" id="option-reduced">
                <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
              </RadioGroup.Item>
              <label className={styles.Label} htmlFor="option-reduced">
                Reduced
              </label>
            </div>
            <div className={styles.RadioGroupItemWrapper}> 
              <RadioGroup.Item className={styles.RadioGroupItem} value="normal" id="option-normal">
                <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
              </RadioGroup.Item>
              <label className={styles.Label} htmlFor="option-normal">
                Normal
              </label>
            </div>
          </RadioGroup.Root>
        </fieldset>
      </section>
      <Link>
        Message Me ↣
      </Link>
    </header>
  );
}
