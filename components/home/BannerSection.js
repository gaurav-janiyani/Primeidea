import Image from "next/image";
import Header from "../header";

const BannerSection = () => {
    <section>
        <div className="banner-section relative h-[95vh]">
            <div className="image-section">
                <Image src="/images/banner.jpeg" width={1920} height={1280} alt="Banner" />
            </div>
            <Header />
        </div>
    </section>
}

export default BannerSection;