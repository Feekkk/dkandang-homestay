import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Cigarette, 
  Users, 
  Volume2, 
  Activity, 
  Coffee,
  Heart,
  Shield
} from "lucide-react";

const rules = [
  {
    icon: Clock,
    title: "Daftar Masuk Fleksibel",
    description: "Daftar masuk: Selepas 12 tengah hari • Daftar keluar: Sebelum 11 pagi",
    detail: "Daftar masuk awal atau daftar keluar lewat boleh diminta",
    type: "positive"
  },
  {
    icon: Cigarette,
    title: "Ruang Bebas Asap Rokok",
    description: "Dilarang merokok di dalam rumah",
    detail: "Ruang patio luar disediakan untuk perokok",
    type: "neutral"
  },
  {
    icon: Users,
    title: "Kapasiti Tetamu",
    description: "Maksimum 6 tetamu",
    detail: "Ini terpakai untuk beberapa bilik, sila semak butiran bilik",
    type: "neutral"
  },
  {
    icon: Volume2,
    title: "Waktu Senyap",
    description: "Jaga tahap bunyi selepas 10 malam",
    detail: "Kami berada di kawasan kediaman dengan jiran yang baik",
    type: "neutral"
  },
  {
    icon: Activity,
    title: "Aktiviti",
    description: "Tetamu bertanggungjawab sendiri untuk sebarang aktiviti",
    detail: "Banyak aktiviti disediakan, sila rujuk buku panduan kami",
    type: "positive"
  },
  {
    icon: Coffee,
    title: "Akses Dapur",
    description: "Dapur lengkap tersedia 24/7",
    detail: "Sila bersihkan selepas guna dan hormati tetamu lain",
    type: "positive"
  }
];

export const HouseRules = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-homestay-earth border-homestay-earth">
            <Heart className="w-4 h-4 mr-2" />
            Garis Panduan Rumah
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Garis Panduan Mudah untuk
            <span className="block text-homestay-warm">Penginapan Kami</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami percaya dalam mewujudkan suasana yang selesa dan saling menghormati untuk semua. 
            Garis panduan mesra ini membantu memastikan semua tetamu mendapat pengalaman yang terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {rules.map((rule, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${
                rule.type === 'positive' ? 'bg-white hover:bg-green-50' : 'bg-white hover:bg-blue-50'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    rule.type === 'positive' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-homestay-sage text-homestay-earth'
                  }`}>
                    <rule.icon className="w-6 h-6" />
                  </div>
                  {rule.type === 'positive' && (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Mesra Tetamu
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-foreground">{rule.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-3 font-medium">
                  {rule.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {rule.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Card */}
        <Card className="max-w-4xl mx-auto border-0 shadow-hover bg-white">
          <CardContent className="p-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-homestay-warm rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Keselamatan & Sekuriti Anda
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Kawasan kami berpagar dan maklumat kecemasan disediakan. 
                  Kami sentiasa bersedia untuk sebarang pertanyaan atau kebimbangan sepanjang penginapan anda.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    Pagar Sekeliling
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    Pertukaran Kunci Selamat
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    Nombor Kecemasan Disediakan
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-homestay-warm rounded-full mr-3" />
                    Panduan Kawasan Tempatan Disertakan
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};