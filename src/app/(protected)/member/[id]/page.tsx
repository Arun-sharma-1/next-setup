'use client'
import { useAppSelector } from '@/redux/hooks';
import React from 'react'

// export const metadata = {
//     title: {
//         default: "Member info"
//     }
// }

// export async function generateStaticParams() {
//     return [{ id: '1' }, { id: '2' }]
// }

//async and await are used in server component , to use async operation in client component we have to use use -> use() or useserver
const MemeberDetails = () => {
    // const data = await params;
    // const parmas = useParams(); // to use this , we have to make this component as client 
    // console.log('parmas', parmas)
    // console.log('id', data)

    const userData = useAppSelector((state) => state.user);

    return (
        <div>MemeberDetails of{userData?.data?.email}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur reprehenderit tenetur repudiandae ratione earum enim omnis ex nobis animi debitis pariatur minus, aliquid fuga deleniti ducimus. Atque, recusandae magni!
                Deleniti debitis, dolor consectetur aperiam dicta unde fugiat rerum laudantium, harum ratione at iure ullam cum ipsum officiis corrupti doloribus ab similique. Molestias alias quis optio aspernatur facilis neque veritatis?
                Veritatis, eligendi. Magnam numquam soluta labore porro explicabo, culpa quos, corrupti sit fuga veniam necessitatibus. Iusto sequi vitae natus, reprehenderit fugiat atque eius non iure, unde aut animi id repellat.
                Id commodi ea esse enim in adipisci voluptates, tenetur sit autem reiciendis aperiam, dolore, dolorum at. Repellendus culpa, ea, nostrum magnam facere assumenda, beatae voluptatem non odit molestias aut unde.
                Quia repudiandae et voluptate necessitatibus quae, omnis mollitia impedit debitis eum commodi vero, accusamus, nesciunt fugit consequuntur error nemo! Veritatis tempore quidem laboriosam aliquid aspernatur facere quisquam corrupti deleniti non?
                Praesentium libero, enim repellat, quae facere repellendus ipsum culpa vero optio odit placeat quasi exercitationem atque rerum, debitis repudiandae ducimus aperiam deserunt minima tempore perferendis? Adipisci aut cum quibusdam velit!
                Veniam doloribus repudiandae, pariatur voluptates, magni consequuntur eligendi perspiciatis qui nam saepe, voluptate in. Officia non odio veritatis accusamus ipsum animi facere eius ex natus, tempora cumque dolore, ea nihil.
                Excepturi expedita totam cumque quasi eveniet quas corporis ipsa officiis delectus quod odit accusamus dolores minus, dolorem eos provident, tenetur, laboriosam exercitationem alias explicabo nostrum. Obcaecati fugiat nobis neque eveniet?
                Corrupti dolorum eius porro. Harum iste reiciendis magni adipisci beatae itaque, libero rem suscipit obcaecati? Dolorum pariatur doloribus laborum aut in accusamus incidunt reiciendis dolor ipsa, quam corrupti expedita nobis.
                Voluptatem voluptatibus vel, sunt, corrupti unde, quae quibusdam maiores in esse perferendis ipsum! Sapiente ipsum perspiciatis alias nam enim! Pariatur quod nisi repellat rem reiciendis architecto illum sit accusantium optio.
                Iusto ducimus mollitia enim. Sapiente fugiat voluptatum, vero reprehenderit a minus nesciunt nulla corporis odit vitae et quidem ad! Dolore ducimus minima consectetur ea consequuntur fugiat porro corporis soluta pariatur?
                Odio similique beatae magni velit, fugiat molestias, repudiandae quod obcaecati quas asperiores quae? Placeat fugit dolor sint voluptatibus totam corporis iste unde non delectus saepe atque, vitae itaque sequi repellendus.
                Expedita maxime qui officia odio voluptatibus facilis. Eveniet inventore dolorum delectus et exercitationem. Minima illo natus quisquam praesentium ullam. Ratione debitis molestiae numquam perferendis odit. Itaque ipsa autem a! Repudiandae.
                Ad aliquid sequi nobis incidunt, saepe corrupti exercitationem, fuga unde, nesciunt pariatur aspernatur cumque veniam tenetur laboriosam? Odio neque tenetur harum reiciendis deleniti illum sequi ad? Accusamus, voluptatibus. Optio, facilis.
                Voluptatibus alias quae dicta excepturi at maiores, odit laudantium hic et. Quaerat nemo praesentium, ipsum iure possimus quam quod fugit libero repellendus ad illo, voluptates corporis error consequuntur accusantium enim.
                Non, eos dolorum? Temporibus sit quis quae ducimus labore corporis numquam doloribus, voluptatum a, aut et pariatur dolorem eum obcaecati quidem maxime fugiat recusandae mollitia ad fugit molestias voluptatem? Repellendus.
                Necessitatibus, vel. Autem sint nemo aliquid inventore non! Magnam consequatur ipsam molestiae incidunt. Adipisci delectus eveniet impedit distinctio culpa officiis suscipit? Sapiente provident reprehenderit nihil aperiam quod eius perferendis ratione?
                Obcaecati quis tempore enim molestiae accusantium nemo dolorem, velit ex. Sint quam exercitationem, maxime perferendis dolorem non ad velit quos numquam esse obcaecati, rem natus eaque provident labore veniam necessitatibus?
                Dolores nam hic cupiditate nesciunt eaque vitae aut sed officiis repellendus eius. Placeat, tenetur. Saepe earum, corporis ex sapiente ipsum quis hic obcaecati magni magnam aperiam quos? Atque, aspernatur iste.
                Unde dignissimos dolores beatae doloremque ratione, enim expedita maiores iste laboriosam iusto pariatur nostrum vitae? Velit nihil ea vel quisquam placeat culpa, debitis dicta itaque eligendi dignissimos quam neque cum?
                Fugit voluptas ducimus excepturi et in maxime incidunt expedita quos molestiae accusamus numquam deleniti, itaque facere repudiandae vero doloremque dolorem laborum cupiditate! Ipsum exercitationem architecto adipisci, ipsa totam optio expedita?
                In velit nobis, possimus perspiciatis illum totam vitae ad minus laborum sed mollitia. A natus incidunt et? Quasi cum molestiae dolorum, corporis sequi eaque odit repellendus cumque laboriosam esse? At?
                Id aliquid veritatis deserunt placeat quisquam distinctio odit cupiditate harum, quos ullam quis corporis quasi provident quod quidem asperiores ab ducimus repellendus voluptatum quam beatae quia saepe consequatur quaerat. Quos.
                Necessitatibus reiciendis delectus laudantium? Voluptatem tenetur repellendus recusandae exercitationem necessitatibus, porro culpa distinctio doloribus quae facilis illo cumque dolores, magnam asperiores et atque iure voluptate illum quia. Illo, ab iusto?
                Quae, est iste perspiciatis dicta velit atque placeat eligendi quam consectetur ut dolore unde quod, error, tempore quas id ipsa. Voluptates consequatur, voluptate dolore autem alias ipsam eligendi incidunt suscipit.
                Facilis eaque sed doloremque possimus iste quo, dicta earum vitae animi perferendis laudantium asperiores! Minus, possimus in voluptates facere voluptate nostrum, omnis error nihil dolorum consequuntur eligendi quia necessitatibus provident.
                Facilis fugit asperiores vitae nam tenetur beatae quod blanditiis quibusdam ratione rerum possimus sint iure quia consequatur, illum ut mollitia sit culpa perferendis reiciendis omnis temporibus cumque nostrum vel? Voluptatem!
                Quis perspiciatis dolorem repudiandae consequuntur numquam. Minima ratione, quae consequatur voluptate totam eveniet facere nobis odio voluptatum aut sit iste in rerum mollitia tempore molestias assumenda! Accusamus temporibus praesentium debitis.
                Non esse dignissimos vel amet modi consequatur odio quisquam magni dolore similique pariatur maiores illo molestiae officiis quasi ipsam laborum sed doloremque ab, dolorem vero accusamus omnis perspiciatis saepe! Soluta.
                Aperiam hic sit eius blanditiis reiciendis suscipit ipsa iste voluptate expedita minima, architecto eveniet corrupti dignissimos dolores totam! Quod iure assumenda delectus modi a distinctio commodi officia magni deserunt cum.
                Sed cum sequi molestiae. Accusamus, dignissimos dolorem harum assumenda blanditiis excepturi atque voluptate ducimus quam placeat velit sint minima incidunt quaerat, corporis rem perspiciatis deserunt perferendis iste dicta rerum neque.
                Dicta modi, dignissimos ad facere reiciendis eum nisi, fugiat, suscipit quidem quos quam doloribus quasi. Dignissimos provident repellat ullam voluptate in doloribus. Architecto neque, a natus explicabo tempora hic veniam.
                Aut aspernatur doloremque veritatis inventore ab id porro minima odit tenetur mollitia qui, consequatur dolorum aliquam unde, voluptatem est ratione in numquam nisi quam exercitationem dolores dolorem. Assumenda, voluptatum temporibus.
                Necessitatibus ipsa nulla facere in doloribus dicta iste, aliquam illum praesentium ipsum perferendis laudantium soluta aliquid dignissimos error ullam maiores et quam magni velit modi nemo? Nostrum dolor vel totam.
                Voluptate quaerat, iusto recusandae quos debitis magnam sit vel temporibus ipsum vitae repellendus hic. Illo modi possimus minima aut animi? Odit eligendi voluptatum optio, expedita ullam quod rerum ducimus temporibus?
                Voluptate reprehenderit quis velit dicta autem? Harum rem impedit consequatur consectetur id deleniti atque eos vel soluta, unde cupiditate, placeat molestias! Veritatis amet quam animi quo inventore dolores exercitationem corrupti.
                Deserunt repellendus, fugit enim rerum quo, soluta alias minus eaque eligendi culpa nostrum qui similique? Numquam, qui perspiciatis placeat, eveniet vel explicabo magnam, accusamus esse animi a dignissimos ipsam consequuntur!
                Reiciendis est laudantium adipisci assumenda tenetur esse dolorem maiores eaque nostrum officia suscipit vero odio veritatis tempora mollitia voluptatem, architecto enim ut quis? Quasi asperiores vel facilis dolorum adipisci? Provident?
                Obcaecati minus ipsum, dolor quo velit, dicta dolores non officia officiis, animi laudantium similique nobis. Doloribus eveniet repellendus nulla necessitatibus accusantium, praesentium ipsam earum voluptatum expedita est, perferendis, iusto nihil?
                Sint maxime voluptatum ad perspiciatis id voluptas quis, dicta autem rerum necessitatibus vero nobis. Error distinctio sequi, numquam nulla consectetur, a adipisci porro aliquid officia labore, voluptatum qui expedita voluptas.
                Quis illo impedit soluta enim corporis sed nesciunt quia recusandae incidunt ipsa voluptatem nobis iusto, odio cum voluptatibus veritatis dolorum quaerat voluptates. Labore quos, ad officiis iste numquam nemo odit?
                Quaerat iste ratione exercitationem ut nobis id sit voluptate repudiandae nesciunt nam soluta accusantium quos sed, beatae asperiores eveniet rerum architecto ipsum, non fugiat molestias incidunt! Consequuntur et iure ipsum.
                Laudantium totam ipsam numquam id labore, voluptatem molestias fuga iure tempore in voluptate dolores? Beatae, ipsa repudiandae nisi illo fugit porro quam debitis, unde tenetur doloremque minima quas tempore itaque!
                Velit facilis ab, voluptas consequuntur asperiores voluptatem facere deserunt cupiditate deleniti optio voluptatibus in? Unde voluptatibus optio inventore cupiditate iure expedita id sunt doloribus molestiae quidem adipisci reiciendis, sequi fugit.
                Iure dignissimos ducimus totam debitis quasi vero accusamus harum possimus nemo deleniti repellat magni sequi consequatur, qui ratione blanditiis doloremque error? Deleniti accusamus eligendi saepe eaque, soluta ea perferendis cum.
                Vitae veniam doloribus dicta nihil porro optio quaerat amet voluptatibus, impedit ratione nesciunt ducimus recusandae delectus unde? Quae modi quis amet minima, autem adipisci maxime corporis, sit aliquid ut dolor!
                Reiciendis hic id officiis reprehenderit, odit eaque ad inventore deleniti sed doloremque temporibus architecto doloribus, voluptatibus eos delectus provident quaerat dolorum autem voluptatem minus ab perferendis voluptates unde. Sequi, pariatur.
                Eligendi assumenda dolore provident distinctio commodi temporibus odit nemo corrupti accusamus asperiores hic, ipsum animi vel a recusandae maxime. Eligendi, aperiam! Illum fugit similique quam maiores dolor impedit saepe facere.
                Deserunt, dolorem. Laborum quidem, id quasi nisi repellendus ea inventore reiciendis quaerat unde nulla, optio laudantium illum, et ipsam molestiae explicabo consequatur voluptate molestias eum voluptates. Tenetur, aperiam. Explicabo, voluptatum!
                Illo suscipit hic commodi quam incidunt assumenda ut, dignissimos quos facilis accusantium quae accusamus nemo cupiditate aliquam vel iure? Aut consectetur omnis veniam vel explicabo. Aliquam velit adipisci quidem est!
                Vero, suscipit ipsam, numquam voluptate recusandae illo odio, commodi placeat eos ducimus culpa nemo? Nam, maxime tempora exercitationem dolorem amet doloremque illum inventore numquam, voluptate, obcaecati mollitia doloribus iure! Ea.
                Suscipit doloremque ut obcaecati, consequuntur reprehenderit sed architecto magnam id commodi magni, ducimus quo voluptatibus sequi! Quis dignissimos recusandae quisquam, explicabo, reiciendis tempora aliquam ullam culpa, esse rerum at quia.
                Architecto, illum veniam sequi quod facilis deleniti odio possimus temporibus quis molestias officia sunt repellat id nihil, voluptas nam dignissimos aliquid minus tenetur, ipsum inventore error nesciunt. Fugit, consectetur exercitationem.
                A dolore vitae amet nesciunt odit inventore accusantium soluta minima aperiam quibusdam sed modi suscipit, ipsam pariatur ipsum veniam ex temporibus excepturi! Neque tenetur dolorum atque odio corrupti maxime consequatur.
                Quasi veniam nostrum sequi doloribus culpa excepturi, reprehenderit veritatis perferendis ex necessitatibus dolore officiis magnam praesentium molestiae, nihil quisquam! Iure ipsum ea error accusamus earum dignissimos veniam sequi dolores vel.
                Hic, unde beatae voluptatem recusandae sed numquam repudiandae quidem ad? Eligendi magnam dignissimos beatae quibusdam enim, aperiam assumenda praesentium inventore quos aut provident? Consectetur pariatur voluptate ex molestias vel placeat.
                Quibusdam officiis quasi totam, ut deleniti dolor sit nobis numquam facilis. Officia ad temporibus ea consequuntur, aspernatur sit, fugit repellat dicta suscipit ex asperiores assumenda! Natus, odit? Officia, sequi rem.
                Nesciunt dignissimos temporibus recusandae dolorum tenetur illo, neque eos animi non saepe repellendus aliquid velit perferendis, unde quaerat quas quasi cupiditate numquam suscipit, quos pariatur consequuntur ad minima nulla. Magni!
                Vero tenetur laborum repellat adipisci in harum, sed veritatis voluptatem distinctio quos delectus sit est quod assumenda cum atque expedita quibusdam omnis suscipit quis culpa. Provident odit illo facilis beatae.
                Quo voluptate dolorum sapiente necessitatibus illo sed adipisci veritatis voluptatem, perferendis quia ad corporis error repellat, beatae excepturi ducimus aut nulla ratione laboriosam distinctio vel. Et, sapiente labore! Nemo, optio.
                Fugit nostrum qui sunt maiores similique nemo modi natus laborum ut esse. Natus deserunt perspiciatis, atque est, cupiditate porro error laborum culpa, facilis corporis voluptate necessitatibus quisquam quae quidem aperiam!
                Illum earum veniam blanditiis impedit dolor fuga debitis ab sit tempora. Velit ratione dolore assumenda numquam quo omnis minima libero incidunt et! Sapiente, eligendi aliquam! Nisi doloremque corporis inventore omnis.
                Commodi eaque unde, dolor ratione delectus accusamus, labore deserunt et non harum error, neque nemo fugiat consequatur minima. Nostrum ut aliquid vitae in! Eligendi corporis vitae a nulla odio est.
                Rem fuga ea, fugiat libero vel suscipit sint velit ducimus aliquam molestiae, illum iure tempore facere, error distinctio aliquid doloribus! Dolores laudantium numquam quo sed, quis quaerat. Unde, distinctio ut?
                Facere illum odit possimus natus ratione! Sequi quasi accusantium officiis recusandae eligendi! Ipsam dolore doloribus nihil corporis consequuntur unde cupiditate repellendus deleniti ratione incidunt! Vitae veniam placeat dignissimos labore laudantium.
                Odit voluptatem quibusdam vel minus blanditiis ipsa rem culpa corrupti nam. Illo illum quae nisi natus blanditiis ipsum quasi quia iste quidem. Nemo magni obcaecati quo, expedita sapiente voluptate repellendus!
                Cupiditate omnis quae, quia veritatis optio sint accusamus dignissimos porro reiciendis enim dolorem vero, perferendis velit in ipsa ab nihil doloribus illum tenetur distinctio harum magni repellendus voluptatem eum! Fuga!
                Quaerat quidem magnam voluptate dicta deserunt distinctio aut, eligendi voluptas eveniet, aspernatur maxime. Exercitationem sit minima et inventore eum porro quidem impedit vel blanditiis iusto quia, quibusdam, commodi illo velit!
                Optio perspiciatis magnam reiciendis? Et, unde cupiditate, explicabo iusto maxime officiis ab laborum ratione quidem debitis pariatur. Corporis, doloribus. Beatae similique consequuntur voluptatem facilis nesciunt ad cumque error necessitatibus quae!
                Possimus at voluptatibus eligendi, culpa porro minima officia. Tenetur libero fugit corrupti repellat, necessitatibus quod aut debitis quam sint earum eius cum iste dolor praesentium error quidem eum unde dolorum.
                Dolorem enim consequatur dolorum ducimus illum, unde error totam, inventore quod tenetur nisi, provident deserunt exercitationem expedita corrupti. Reiciendis consequuntur ipsa esse impedit sunt cum commodi explicabo vitae maiores aliquam?
                Maiores hic, mollitia quo repellendus dolores amet nam modi id omnis saepe accusamus numquam recusandae beatae quia ratione sunt, incidunt non nostrum architecto pariatur voluptatum! Itaque nam aut totam impedit.
                Explicabo neque odit corporis inventore dolore ex officiis numquam hic dolores eos placeat, sequi rerum, ipsum nobis eum, dignissimos unde provident. Quam ipsam hic beatae sunt alias ratione ut adipisci.
                Suscipit aperiam quasi repudiandae quas iste quibusdam nesciunt mollitia beatae? Dicta, eaque obcaecati neque doloribus nisi similique perferendis odit tempore sequi, doloremque omnis, sint accusantium ea perspiciatis explicabo blanditiis possimus!
                Vero velit ex fugiat commodi magni enim mollitia eveniet sapiente alias similique praesentium facere maxime necessitatibus adipisci inventore, quisquam suscipit. Incidunt quae sed, modi explicabo asperiores soluta consequuntur quibusdam. Saepe.
                Distinctio reiciendis molestias fuga rem impedit quidem sunt saepe debitis possimus, dolorem adipisci mollitia itaque alias laboriosam, numquam consequuntur porro deleniti quam animi! Cumque, perferendis provident inventore laudantium dicta maxime?
                Ad dolor vero corporis totam ipsam molestias quae iusto accusamus laudantium iste, ea eveniet consequuntur quidem ipsa repudiandae architecto reiciendis vel eum quisquam culpa temporibus itaque. Aut eos vitae inventore.
                Earum temporibus odit explicabo esse ad saepe perspiciatis quidem, amet laboriosam porro? Expedita minus delectus eum, adipisci omnis aliquam eaque numquam eos aliquid voluptatem ratione necessitatibus soluta! Temporibus, blanditiis deserunt?
                Repellendus blanditiis illo inventore odio similique dolorum libero velit, dolorem ex qui doloremque et obcaecati maiores voluptatum ipsa, facere, suscipit ad dolor nihil ipsum eaque animi itaque deserunt vitae! Hic.
                At qui dignissimos, quos quisquam cum veritatis architecto non laborum animi laudantium explicabo delectus dolores fuga minus. Autem natus nemo quia, voluptatibus ducimus quisquam delectus, omnis iure, sunt perferendis dolores.
                Itaque ut, corrupti consequuntur ullam illo aliquam ducimus repellendus veritatis repellat aliquid voluptas quibusdam architecto dolorum doloribus, deserunt soluta! Odit nemo molestias, minus reiciendis incidunt iusto quia iure itaque ab!
                Excepturi eligendi similique ipsum in facilis, autem harum repellendus temporibus nobis rerum odit saepe doloremque provident accusamus quam minima dolorum repellat sapiente modi assumenda laboriosam alias magni eveniet eos! Omnis.
                Dicta, nulla consequatur iste voluptatum officiis tempore animi fugiat voluptas architecto blanditiis sed doloribus! Voluptates rerum ipsa explicabo veniam inventore. Tempore vel est, deserunt ipsum aspernatur quisquam. Obcaecati, officia pariatur.
                Cumque distinctio animi et dolorum fuga? Quis numquam ipsam quidem harum eius saepe fuga nam reiciendis iste, natus similique cupiditate eos? Reiciendis molestiae quidem alias culpa, expedita eaque voluptates facilis.
                Perspiciatis ad explicabo animi blanditiis. Facilis officia iste modi obcaecati expedita blanditiis quaerat officiis quos doloribus quam, deserunt repudiandae temporibus nulla iusto magnam voluptates, saepe dicta, reiciendis voluptatem pariatur. Voluptas.
                Explicabo molestias porro vitae distinctio eum similique fugiat alias obcaecati possimus quo doloribus, placeat, non voluptatibus hic. Ut nostrum ipsum optio reiciendis commodi ab, facere autem, voluptatem velit, quisquam consectetur.
                Perferendis soluta inventore, praesentium nobis molestiae doloremque numquam corporis eos. Tempore odio iusto laborum corrupti, suscipit alias eos consectetur architecto quis magni, voluptatibus labore et impedit! Distinctio, accusamus. Ea, aut?
                Sunt quas assumenda corrupti exercitationem quisquam magni, sequi illum vel maxime alias nisi vitae officiis officia similique eligendi. Suscipit non esse reiciendis rem aliquam atque consectetur totam laboriosam? Distinctio, ipsam!
                Nam nostrum cum rem praesentium quisquam eum consectetur! Laboriosam molestias vero ipsa quisquam aperiam odio. Ab a qui facilis recusandae et quas quos officia, odio velit numquam sunt distinctio assumenda.
                Ex nobis error commodi aperiam. Dolores modi architecto, quod aliquam magnam aliquid nam eligendi. Ad error natus perspiciatis tenetur repudiandae, optio praesentium doloremque magni et quidem ipsa iusto, laborum rem?
                Debitis voluptatem minus, praesentium facere vero suscipit ipsam libero at eveniet nam possimus numquam odit sit aliquid incidunt asperiores nesciunt mollitia quaerat eos voluptatibus fuga harum aperiam! Incidunt, dolores cumque.
                Ut voluptas vel fuga ducimus voluptatem commodi possimus consectetur aspernatur ipsa magni rerum amet aut, natus quos itaque doloremque dignissimos vitae beatae magnam nihil quia est, incidunt porro! Iste, magni?
                Veritatis nesciunt assumenda, ad debitis iste maxime praesentium repellat quo sint eligendi, natus, perferendis magnam vitae eum asperiores? Ut totam aspernatur eum quis temporibus magni unde qui voluptatem exercitationem harum.
                Expedita amet quae, ullam nam quaerat dicta quisquam eligendi, dignissimos vero voluptatem quis et officiis delectus asperiores labore velit accusamus provident illo soluta maxime id exercitationem? Officiis sapiente doloribus sunt.
                Iure facilis laudantium odio architecto accusamus consequatur dolorum aperiam nam reprehenderit dolore incidunt aut, harum nostrum rerum dicta tenetur eum quae voluptatibus ullam rem sit repellendus perferendis velit. Vitae, dolores.
                Quod magni voluptas ducimus optio ipsa laboriosam ullam doloremque natus dolore dolores. Velit in ratione architecto quisquam esse nostrum a est eaque natus tempora numquam ut quis excepturi, provident eveniet?
                Quo tempore maxime in obcaecati a asperiores enim soluta inventore iste ut molestias esse assumenda, rerum cupiditate temporibus voluptate dolores nisi iusto aut amet cumque, facilis libero porro. Maxime, minus.
                Atque odit dolor repellendus suscipit ea rerum ad, officia quod totam. Consectetur veritatis quod aut iste maiores odit accusantium ut minima, atque, corrupti facere doloremque fugit modi nam adipisci repudiandae.
                Distinctio repellendus minus quisquam quia mollitia consequatur ducimus velit. Perferendis minima natus optio repudiandae facere accusamus eveniet temporibus necessitatibus saepe reprehenderit illo illum, atque obcaecati ut voluptatem velit recusandae asperiores!
                Saepe, tenetur? Placeat incidunt distinctio maxime minus aut et velit, dignissimos recusandae explicabo accusamus unde pariatur amet ullam dicta necessitatibus? Dignissimos animi natus ipsa ipsam dolor earum corporis, delectus est!</p>
        </div>

    )
}

export default MemeberDetails